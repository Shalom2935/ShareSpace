import React, { useState } from 'react'
import './Login.scss'
import OnLoad from '../onLoad/onLoad'
import { handleLogin } from './handleLogin'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../components/AuthProvider'

function Login({ showSignUp }) {
  const { login } = useAuth();
  const [err, setErr] = useState('');
  const [onLoad, setOnLoad] = useState(false);
  const [errorAuth, setErrorAuth] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOnLoad(true);
    setErr('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await handleLogin(data);
      const { token } = response;
      login(token);
      setErrorAuth('');
      setErr('')
      navigate('/');

    } catch (error) {
      setErrorAuth(error.connexion);
      setErr('Something went wrong Please retry');
    } finally {
      setOnLoad(false);
    }
  }

  return (
    <div className='login'>
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="login_form__matricule">
            <label htmlFor="matricule">Matricule</label>
            <input 
              type="text" 
              name='matricule'
              style={ errorAuth ? {border: '2px solid red'} : {} }
            />            
          </div>
          <div className="login_form__password">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name='password'
              style={ errorAuth ? {border: '2px solid red'} : {} } 
            />            
          </div>
          {errorAuth && <p className='loginerror'>{errorAuth}</p>}
          {err && !errorAuth && <p className='loginerror'>{err}</p>}
          <p>Don't have an account? <span onClick={showSignUp}>Sign Up</span></p>
          <button 
            type='submit' 
          >
            Login
            {onLoad && <OnLoad />}
          </button>
        </form>
    </div>
  )
}

export default Login
