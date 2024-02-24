import './App.css';
import { ThemeProvider } from './components/context/changeThemeContext';
import { LoginForm } from './components/login-form/login-form';
import { CustomizedSwitches } from './components/material-ui-toggle/toggle';
import { SignUpForm } from './components/sign-up-form/sign-up-form';

function App() {
  return (
    <>
      <CustomizedSwitches />
      <LoginForm />
    </>
  );
}

export default App;
