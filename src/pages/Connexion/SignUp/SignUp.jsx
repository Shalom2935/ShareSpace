import React, { useState } from 'react'
import './SignUp.scss'
import { handleSignUp } from './handleSignUp'
import OnLoad from '../onLoad/onLoad'

function SignUp({ showLogin }) {
  const [onLoad, setOnLoad] = useState(false);
  const [errors, setErrors] = useState({
    matriculeError: '',
    emailError: '',
    passwordError: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOnLoad(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await handleSignUp(data);

      setErrors({
        matriculeError: '',
        emailError: '',
        passwordError: ''
      });
    } catch (error) {
      setErrors({
        matriculeError: error.matricule || '',
        emailError: error.email || '',
        passwordError: error.password || ''
      });
    } finally {
      setOnLoad(false);
    }
  }

  return (
    <div className='signup'>
        <form 
          className="signup_form" 
          onSubmit={handleSubmit}
        >
          <div className="signup_form__name">
            <label htmlFor="name">Name</label>
            <input type="text" name='name'/>    
          </div>
          <div className="signup_form__matricule">
            <label htmlFor="matricule">Matricule</label>
            <input type="text" name='matricule' style={ errors.matriculeError ? {border: '1px solid red'} : {}} />
            {errors.matriculeError && <p className="matriculeerror">{errors.matriculeError}</p>}            
          </div>
          <div className="signup_form__mail">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' style={ errors.emailError ? {border: '1px solid red'} : {}} />
            {errors.emailError && <p className="emailerror">{errors.emailError}</p>}            
          </div>
          <div className="signup_form__password">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' style={ errors.passwordError ? {border: '1px solid red'} : {}} />
            {errors.passwordError && <p className="passworderror">{errors.passwordError}</p>}            
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