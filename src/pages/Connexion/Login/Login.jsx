import React from 'react'
import './Login.scss'

function Login() {
  return (
    <div className='login'>
        <form action="" className="login_form">
          <div className="login_form__matricule">
            <label htmlFor="matricule">Matricule</label>
            <input type="text" name='matricule' />            
          </div>
          <div className="login_form__password">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' />            
          </div>
          <p>Don't have an account? <span>Sign Up</span></p>
          <button>Login</button>
        </form>
    </div>
  )
}

export default Login
