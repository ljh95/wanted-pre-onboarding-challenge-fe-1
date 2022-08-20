import { URL } from '@/func/url';
import { Login } from '@/pages/login/Login.template';
import { Signup } from '@/pages/signup/Signup.template';
import { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Loading } from './component/Loading.template';
import { Navigation } from './component/Navigation';
import { useIsLogined } from './hooks/useIsLogined';
import { Home } from './pages/home/Home.template';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

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
