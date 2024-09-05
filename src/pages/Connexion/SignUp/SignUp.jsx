import React, { useState, useEffect } from 'react'
import './SignUp.scss'
import { handleSignUp } from './handleSignUp'
import OnLoad from '../onLoad/onLoad'

function SignUp({ showLogin }) {
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
  const [onLoad, setOnLoad] = useState(false);
  const [errors, setErrors] = useState({
    matriculeError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  });

  useEffect(() => {
    
    if (password.length > 0 && password.length < 8 ) {
      setErrors({passwordError : 'Password must be at least 8 characters'});
    } else {
      setErrors({passwordError : ''});
    }

    if (confirmPassword.length && (password !== confirmPassword)) {
      setErrors({ confirmPasswordError : 'Passwors do not match' });
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOnLoad(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    delete data.confirmPassword;

    try {
      await handleSignUp(data);

      setErrors({
        matriculeError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
      });
    } catch (error) {
      setErrors({
        matriculeError: error.matricule || '',
        emailError: error.email || '',
        passwordError: error.password || '',
        confirmPasswordError: ''
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
            <div className='wrapper'>
              <input type="text" name='matricule' style={ errors.matriculeError ? {border: '2px solid red'} : {}} />
              {errors.matriculeError && <p className="signuperror">{errors.matriculeError}</p>}                     
            </div>
         </div>
          <div className="signup_form__mail">
            <label htmlFor="email">Email</label>
            <div className="wrapper">
              <input type="email" name='email' style={ errors.emailError ? {border: '2px solid red'} : {}} />
              {errors.emailError && <p className="signuperror">{errors.emailError}</p>}                
            </div>
         </div>
          <div className="signup_form__password">
            <label htmlFor="password">Password</label>
            <div className="wrapper">
              <input 
                type="password" 
                name='password'
                onChange={(e) => {setPassword(e.target.value)}} 
                style={ errors.passwordError || errors.confirmPasswordError ? {border: '2px solid red'} : {}} />
              {errors.passwordError && <p className="signuperror">{errors.passwordError}</p>}            
            </div>
          </div>
          <div className="signup_form__confirmPassword">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="wrapper">
              <input 
                type="password" 
                name='confirmPassword'
                onChange={(e) => {setConfirmPassword(e.target.value)}}  
                style={ errors.confirmPasswordError ? {border: '2px solid red'} : {}} />
              {errors.confirmPasswordError && <p className="signuperror">{errors.confirmPasswordError}</p>}            
            </div>
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