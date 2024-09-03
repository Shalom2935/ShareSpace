import React from 'react'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import './Connexion.scss'

function Connexion() {
  return (
    <div className='connexion'>
        <div className="connexion_title">
            <div className="connexion_title__login">Login</div>
            <div className="connexion_title__signup">SignUp</div>
        </div>
        <Login />
        <SignUp />
    </div>
  )
}

export default Connexion