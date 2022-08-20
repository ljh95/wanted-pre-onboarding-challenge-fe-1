import instance from '@/api/axios';
import { isSingupSuccess } from '@/func/response';
import { useNavigate } from 'react-router-dom';
import { URL } from '@/func/url';

type ReturnType = {
  signup: (email: string, pw: string) => Promise<void>;
};

export const useSignupApi = (): ReturnType => {
  const navigate = useNavigate();
  const signupApi = async (
    email: string,
    pw: string
  ): Promise<SignupResponse> => {
    return instance.post(`/users/create`, {
      email,
      password: pw
    });
  };

  const signup = async (email: string, pw: string) => {
    try {
      const res = await signupApi(email, pw);

      if (!isSingupSuccess(res.message)) {
        alert(res.details);
        return;
      }

      alert('회원가입에 성공하였습니다!');
      navigate(URL.login);
    } catch (error) {
      // alert(error.response.data.details);
    }
  };

  return { signup };
};

type SignupResponse = {
  message: string;
  token: string;
  details: string;
};
