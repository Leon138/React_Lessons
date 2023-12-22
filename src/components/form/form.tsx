/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './form-style.css';

export const Form = () => {
  const [shown, setShown] = useState(false);
  
  const checkPassword = (event: any) => {
    event.preventDefault()
    setShown((shown) => !shown)
  }

  return(
    <div className='form'>
      <form className='formInput'>
        <p>EMAIL</p>
        <input type="email" />
        <p>PASSSWORD</p>
        <div className='formInputPassword'>
          <input className='password' type={shown ? "text" : "password"} />
          <button className={shown ? 'buttonVisibility buttonVisibilityOff' : 'buttonVisibility'} 
                  onClick={checkPassword}>Check
          </button>
        </div>
        <div className='formCheck'>
          <div className='formCheckCheckBox'>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me?</label>
          </div>
          <div className='formCheckLink'>
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className='formButton'>
          <button>LOGIN</button>
          <button>CREATE ACCOUNT</button>
        </div>
      </form>
    </div>
  )
}