import { PathObj } from '@/func/url';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={PathObj.home}>홈: 투두</Link>
        </li>
        <li>
          <Link to={PathObj.login}>로그인</Link>
        </li>
        <li>
          <Link to={PathObj.signin}>회원가입</Link>
        </li>
      </ul>
    </nav>
  );
};
