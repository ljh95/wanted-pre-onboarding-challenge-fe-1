import axios from 'axios';

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
    console.log(error.response);

    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => res.data,
  (error: any) => {
    return Promise.reject(error);
  }
);
export default instance;
