import axios, { AxiosError } from 'axios';
import { URL } from '@/func/url';

export const ACCESS_TOKEN = 'accessToken';
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    config = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: accessToken ?? ''
      }
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => res.data,
  (error) => {
    // TODO: 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

    // axios 에러처리방법 https://github.com/axios/axios/issues/3612
    if (isAxiosError(error)) {
      if (error.response?.status === 400) {
        alert('사용자의 정보가 필요합니다');
        window.location.replace(URL.login);
      }
    }

    return Promise.reject(error);
  }
);
export default instance;

// Because: To type-guard or allow you to specify a generic response type
// ref: https://github.com/axios/axios/issues/3612#issuecomment-1198490390
function isAxiosError<ResponseType>(
  error: unknown
): error is AxiosError<ResponseType> {
  return axios.isAxiosError(error);
}
