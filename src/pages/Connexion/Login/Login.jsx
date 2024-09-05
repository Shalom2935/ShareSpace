import React from 'react'
import './Login.scss'
import { handleLogin } from './handleLogin'

function Login({ showSignUp }) {
  return (
    <div className='login'>
        <form className="login_form" onSubmit={handleLogin}>
          <div className="login_form__matricule">
            <label htmlFor="matricule">Matricule</label>
            <input type="text" name='matricule' />            
          </div>
          <div className="login_form__password">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' />            
          </div>
          <p>Don't have an account? <span onClick={showSignUp}>Sign Up</span></p>
          <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login
