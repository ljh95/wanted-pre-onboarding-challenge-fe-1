import { ACCESS_TOKEN } from '@/api/axios';
import { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from '@/func/url';

export const useIsLogined = () => {
  const nv = useNavigate();
  const accessToken = useMemo(() => localStorage.getItem(ACCESS_TOKEN), []);
  const isLoginedRef = useRef(false);

  useEffect(() => {
    if (accessToken && !isLoginedRef.current) {
      isLoginedRef.current = true;
      nv(URL.home);
      alert('이미 로그인된 사용자 입니다.');
    }
  }, [accessToken]);
};
