import React, { useState } from 'react'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import './Connexion.scss'

function Connexion() {
const [login, setLogin] = useState(true);
const [signUp, setSignUp] = useState(false);

const showSignUp = () => {
    setSignUp(true);
    setLogin(false);
}
const showLogin = () => {
    setLogin(true);
    setSignUp(false);
}
  return (
    <div className='connexion'>
        <div className="connexion_title">
            <div className="connexion_title__login" onClick={showLogin} style={login ? { backgroundColor: 'white' } : {}} >Login</div>
            <div className="connexion_title__signup" onClick={showSignUp} style={signUp ? { backgroundColor: 'white' } : {}}>SignUp</div>
        </div>
        {login && <Login showSignUp={showSignUp}  />}
        {signUp && <SignUp showLogin={showLogin}/>}
    </div>
  )
}

export default Connexion