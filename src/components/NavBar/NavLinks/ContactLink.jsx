import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar.scss'

function ContactLink() {
  return (
    <NavLink className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
        <div className="navlink_icon">
            <svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.04167 11.0833C12.1022 11.0833 14.5833 8.60224 14.5833 5.54167C14.5833 2.48109 12.1022 0 9.04167 0C5.98109 0 3.5 2.48109 3.5 5.54167C3.5 8.60224 5.98109 11.0833 9.04167 11.0833Z" fill="black"/>
                <path d="M11.375 11.6667H6.70833C4.92984 11.6688 3.2248 12.3763 1.96721 13.6339C0.709624 14.8915 0.00216118 16.5965 0 18.375V24.2083C0 24.4404 0.0921871 24.6629 0.256281 24.827C0.420376 24.9911 0.642936 25.0833 0.875 25.0833H17.2083C17.4404 25.0833 17.663 24.9911 17.8271 24.827C17.9911 24.6629 18.0833 24.4404 18.0833 24.2083V18.375C18.0812 16.5965 17.3737 14.8915 16.1161 13.6339C14.8585 12.3763 13.1535 11.6688 11.375 11.6667Z" fill="black"/>
            </svg>
        </div>
        <div className="navlink_text">Contact Us</div>
    </NavLink>
  )
}

export default ContactLink