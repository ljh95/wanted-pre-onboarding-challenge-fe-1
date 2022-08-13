import { useSignupApi } from '@/hooks/useSignupApi';
import { useSignupForm } from '@/hooks/useSignupForm';

export const Signup = () => {
  const { signupForm, setEmail, setPassword, setPasswordCheck, isValid } =
    useSignupForm();
  const { signup } = useSignupApi();

  return (
    <div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          placeholder="asd@naver.com"
          value={signupForm.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          value={signupForm.pw}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">비밀번호 확인</label>
        <input
          type="password"
          value={signupForm.pwCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
      </div>

      <button
        disabled={!isValid}
        onClick={() => signup(signupForm.email, signupForm.pw)}>
        회원가입 {isValid ? '가능' : '불가능'}
      </button>
    </div>
  );
};
