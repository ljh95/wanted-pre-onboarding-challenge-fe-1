import axios, { AxiosError } from 'axios';

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
    return Promise.reject(error);
  }
);
export default instance;

// Because: To type-guard or allow you to specify a generic response type
// ref: https://github.com/axios/axios/issues/3612#issuecomment-1198490390
export function isAxiosError<ResponseType>(
  error: unknown
): error is AxiosError<ResponseType> {
  return axios.isAxiosError(error);
}
