import React, { useState } from 'react'
import './SignUp.scss'
import { handleSignUp } from './handleSignUp'
import OnLoad from '../onLoad/onLoad'

function SignUp({ showLogin }) {
  const [onLoad, setOnLoad] = useState(false);

  return (
    <div className='signup'>
        <form 
          className="signup_form" 
          onSubmit={handleSignUp}
        >
          <div className="signup_form__name">
            <label htmlFor="name">Name</label>
            <input type="text" name='name'/>    
          </div>
          <div className="signup_form__matricule">
            <label htmlFor="matricule">Matricule</label>
            <input type="text" name='matricule' />
            <p className="matriculeerror" style={{display:'none'}}></p>            
          </div>
          <div className="signup_form__mail">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
            <p className="emailerror" style={{display:'none'}}></p>            
          </div>
          <div className="signup_form__password">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' />            
          </div>
          <p>Already have an account? <span onClick={showLogin}>Login</span></p>
          <button 
            type='submit' 
          >
            Sign Up
            {onLoad && <OnLoad />}
          </button>
        </form>
    </div>
  )
}

export default SignUp