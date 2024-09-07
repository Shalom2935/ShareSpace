import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar.scss'
import { useAuth } from '../../AuthProvider'

const LogOut = ({ to, ariaLabel }) => {
    const { logout } = useAuth();

    const handleLogOut = () => {
        logout();
    };

    return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}
      aria-label={ariaLabel}
      onClick={handleLogOut}  
    >        
        <div className="navlink_icon logout">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            </svg>
        </div>
        <div className="navlink_text">Log out</div>
    </NavLink>
  )
}

export default LogOut