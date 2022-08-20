import { URL } from '@/func/url';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={URL.home}>홈: 투두</Link>
        </li>
        <li>
          <Link to={URL.login}>로그인</Link>
        </li>
        <li>
          <Link to={URL.signin}>회원가입</Link>
        </li>
      </ul>
    </nav>
  );
};
