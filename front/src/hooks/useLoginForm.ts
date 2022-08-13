import { isEmailValidate, isPwValidate } from '@/func/validate';
import { useEffect, useState } from 'react';

type Return = {
  loginForm: LoginType;
  setEmail: (email: string) => void;
  setPassword: (pw: string) => void;
  isValid: boolean;
};

export const useLoginForm = (): Return => {
  const [loginForm, setLoginForm] = useState<LoginType>(initLogin);

  const setEmail = (email: string) => {
    setLoginForm((l) => ({ ...l, email }));
  };

  const setPassword = (pw: string) => {
    setLoginForm((l) => ({ ...l, pw }));
  };

  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (!isEmailValidate(loginForm.email)) return setIsValid(false);
    if (!isPwValidate(loginForm.pw)) return setIsValid(false);

    setIsValid(true);
  }, [loginForm]);

  return {
    loginForm,
    setEmail,
    setPassword,
    isValid
  };
};

export type LoginType = {
  email: string;
  pw: string;
};

const initLogin = {
  email: '',
  pw: ''
};
