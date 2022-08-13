import { useIsLogined } from '@/hooks/useIsLogined';
import { useLoginApi } from '@/hooks/useLoginApi';
import { useLoginForm } from '@/hooks/useLoginForm';

export const Login = () => {
  const { loginForm, setEmail, setPassword, isValid } = useLoginForm();
  const { login } = useLoginApi();

  useIsLogined();

  return (
    <div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          placeholder="asd@naver.com"
          value={loginForm.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          value={loginForm.pw}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={() => login(loginForm.email, loginForm.pw)}
        disabled={!isValid}>
        로그인 {isValid ? '가능' : '불가능'}
      </button>
    </div>
  );
};
