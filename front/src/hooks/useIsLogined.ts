import { ACCESS_TOKEN } from '@/api/axios';
import { PathObj } from '@/func/url';
import { useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useIsLogined = () => {
  const nv = useNavigate();
  const accessToken = useMemo(() => localStorage.getItem(ACCESS_TOKEN), []);
  const isLoginedRef = useRef(false);

  const location = useLocation();

  useEffect(() => {
    const isHomeUrl = location.pathname === '/';

    if (!isHomeUrl && accessToken && !isLoginedRef.current) {
      isLoginedRef.current = true;
      alert('이미 로그인된 사용자 입니다.');
      nv(PathObj.home);
    }
  }, [accessToken]);
};
