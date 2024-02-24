import { LoginForm } from './components/login-form/login-form';
import { CustomizedSwitches } from './components/material-ui-toggle/toggle';
import { SignUpForm } from './components/sign-up-form/sign-up-form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <CustomizedSwitches /> */}
      <Routes>
        <Route path='/' element={<SignUpForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
