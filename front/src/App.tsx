import { URL } from '@/func/url';
import { Login } from '@/pages/login/Login.template';
import { Signup } from '@/pages/signup/Signup.template';
import { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Loading } from './component/Loading.template';
import { Home } from './pages/home/Home.template';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={URL.login}>로그인</Link>
            </li>
            <li>
              <Link to={URL.signin}>회원가입</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={URL.home} element={<Home />} />
            <Route path={URL.login} element={<Login />} />
            <Route path={URL.signin} element={<Signup />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
