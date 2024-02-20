/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import './form-style.css';

const regexp = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
  password: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{8,}$/,
};

export const Form = () => {
  const [shown, setShown] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  const checkPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShown(!shown);
  };

  const changeStateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case 'email':
        regexp.email.test(email) ? setEmailError(false) : setEmailError(true);
        break;
      case 'password':
        regexp.password.test(password) ? setPasswordError(false) : setPasswordError(true);
        break;
    }
  };

  const validForm = () => {
    if (!emailError && email && !passwordError && password) {
      setIsValidForm(false);
    } else {
      setIsValidForm(true);
    }
  };

  useEffect(() => {
    validForm();
  }, [emailError && email && passwordError && password]);

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
  };

  return (
    <div className='form'>
      <form className='formInput' onSubmit={handelSubmit}>
        <p>EMAIL</p>
        <input
          id='email'
          onChange={changeStateInput}
          onBlur={handleBlur}
          autoComplete='off'
          type='email'
        />
        {emailError && (
          <small style={{ color: 'red' }}>Enter Valid Email, Email type example@mail.com</small>
        )}
        <p>PASSSWORD</p>
        <div className='formInputPassword'>
          <input
            id='password'
            onChange={changeStateInput}
            onBlur={handleBlur}
            type={shown ? 'text' : 'password'}
          />
          <button
            className={shown ? 'buttonVisibility buttonVisibilityOff' : 'buttonVisibility'}
            onClick={checkPassword}
          >
            Check
          </button>
          {passwordError && <small style={{ color: 'red' }}>Enter Valid Password</small>}
        </div>
        <div className='formCheck'>
          <div className='formCheckCheckBox'>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember'>Remember me?</label>
          </div>
          <div className='formCheckLink'>
            <a href='#'>Forgot password?</a>
          </div>
        </div>
        <div className='formButton'>
          <button disabled={isValidForm} type='submit'>
            LOGIN
          </button>
          <button>CREATE ACCOUNT</button>
        </div>
      </form>
    </div>
  );
};
