import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { LoginForm } from './components/login-form/login-form';
import { Users } from './components/users/users';
import { Posts } from './components/posts/posts';
import { CustomizedSwitches } from './components/material-ui-toggle/toggle';
import { SignUpForm } from './components/sign-up-form/sign-up-form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFoundComponent } from './components/empty-router/empty-router';

import './App.css';
import { UserInfo } from './components/users/user-info';

function App() {
  return (
    <Router>
      <Header />
      {/* <CustomizedSwitches /> */}
      <div className='appContainer'>
        <Routes>
          <Route path='/' element={<SignUpForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/main' element={<Main />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/users' element={<Users />} />
          <Route path='/user/:id' element={<UserInfo />} />
          <Route path='*' element={<NotFoundComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
