import { useNavigate } from 'react-router-dom';
import { PathObj } from '@/func/url';
import { isAxiosError } from '@/api/axios';

// TODO: 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요
export const useError = () => {
  const navigate = useNavigate();

  const noUserError = (error: unknown) => {
    // axios 에러처리방법 https://github.com/axios/axios/issues/3612
    if (isAxiosError(error)) {
      if (error.response?.status === 400) {
        alert('사용자의 정보가 필요합니다');
        navigate(PathObj.login);
      }
    }
  };

  return { noUserError };
};
