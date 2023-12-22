/* eslint-disable jsx-a11y/anchor-is-valid */
import './login-form-style.css';
import forestImg from '../../shared/img/forest.jpg'
import { Form } from 'components/form/form';

export const LoginForm = () => {
  return (
    <div className="container">
      <div className='loginForm'>
        <div className='loginFormTitle'>
          <h2>Welcome back to <br></br> Pretty Login</h2>
          <p>It's great to have you back!</p>
        </div>
        <div className='loginFormForm'>
          <Form />
        </div>
      <div className='loginFormFooter'>
        <p>Or login with</p>
        <div>
          <a href="#">Facebook</a>
          <a href="#">Google</a>
        </div>
      </div>
      </div>
      <div className='img'>
        <img src={forestImg} alt="forest" />
      </div>
    </div>
  )
}