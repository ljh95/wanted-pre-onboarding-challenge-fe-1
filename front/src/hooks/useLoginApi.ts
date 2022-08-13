import instance, { ACCESS_TOKEN } from '@/api/axios';
import { isLoginSuccess } from '@/func/response';
import { useNavigate } from 'react-router-dom';
import { URL } from '@/func/url';

type ReturnType = {
  login: (email: string, pw: string) => void;
};

export const useLoginApi = (): ReturnType => {
  const navigate = useNavigate();
  const loginApi = async (
    email: string,
    pw: string
  ): Promise<LoginResponse> => {
    return instance.post('/users/login', {
      email,
      password: pw
    });
  };

  const login = async (email: string, pw: string) => {
    try {
      const res = await loginApi(email, pw);

      if (!isLoginSuccess(res.message)) {
        alert(res.message);
        return;
      }

      localStorage.setItem(ACCESS_TOKEN, res.token);
      alert('로그인에 성공하였습니다.');
      navigate(URL.home);
    } catch (error: any) {
      alert(error.response.data.details);
    }
  };

  return { login };
};

type LoginResponse = {
  message: string;
  token: string;
  details: string;
};
