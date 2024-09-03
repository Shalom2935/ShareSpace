import React from 'react'
import './SignUp.scss'

function SignUp() {
  return (
    <div className='signup'>
        <form action="" className="signup_form">
          <div className="signup_form__name">
            <label htmlFor="name">Name</label>
            <input type="text" name='name'/>    
          </div>
          <div className="signup_form__matricule">
            <label htmlFor="matricule">Matricule</label>
            <input type="text" name='matricule' />            
          </div>
          <div className="signup_form__mail">
            <label htmlFor="mail">Email</label>
            <input type="email" name='mail' />            
          </div>
          <div className="signup_form__password">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' />            
          </div>
          <p>Already have an account? <span>Login</span></p>
          <button>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp