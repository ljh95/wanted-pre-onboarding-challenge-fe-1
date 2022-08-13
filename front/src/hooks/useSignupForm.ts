import {
  isEmailValidate,
  isPwCheckValidate,
  isPwValidate
} from '@/func/validate';
import { useEffect, useState } from 'react';

type Return = {
  signupForm: SignupType;
  setEmail: (email: string) => void;
  setPassword: (pw: string) => void;
  setPasswordCheck: (pwCheck: string) => void;
  isValid: boolean;
};

export const useSignupForm = (): Return => {
  const [signupForm, setSignupForm] = useState<SignupType>(initSignup);

  const setEmail = (email: string) => {
    setSignupForm((l) => ({ ...l, email }));
  };

  const setPassword = (pw: string) => {
    setSignupForm((l) => ({ ...l, pw }));
  };

  const setPasswordCheck = (pwCheck: string) => {
    setSignupForm((l) => ({ ...l, pwCheck }));
  };

  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (!isEmailValidate(signupForm.email)) return setIsValid(false);
    if (!isPwValidate(signupForm.pw)) return setIsValid(false);
    if (!isPwCheckValidate(signupForm.pw, signupForm.pwCheck))
      return setIsValid(false);

    setIsValid(true);
  }, [signupForm]);

  return {
    signupForm,
    setEmail,
    setPassword,
    setPasswordCheck,
    isValid
  };
};

export type SignupType = {
  email: string;
  pw: string;
  pwCheck: string;
};

const initSignup = {
  email: '',
  pw: '',
  pwCheck: ''
};
