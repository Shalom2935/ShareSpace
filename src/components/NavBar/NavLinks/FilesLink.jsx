import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar.scss'

function FilesLink({ to, ariaLabel }) {
  return (
    <NavLink
      style={{pointerEvents : 'none', opacity: '70%'}}
      to={to}
      className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}
      aria-label={ariaLabel}  
    >
        <div className="navlink_icon">
          <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6667 6.64062V0H1.25C0.557292 0 0 0.522461 0 1.17188V23.8281C0 24.4775 0.557292 25 1.25 25H18.75C19.4427 25 20 24.4775 20 23.8281V7.8125H12.9167C12.2292 7.8125 11.6667 7.28516 11.6667 6.64062ZM15 18.1641C15 18.4863 14.7188 18.75 14.375 18.75H5.625C5.28125 18.75 5 18.4863 5 18.1641V17.7734C5 17.4512 5.28125 17.1875 5.625 17.1875H14.375C14.7188 17.1875 15 17.4512 15 17.7734V18.1641ZM15 15.0391C15 15.3613 14.7188 15.625 14.375 15.625H5.625C5.28125 15.625 5 15.3613 5 15.0391V14.6484C5 14.3262 5.28125 14.0625 5.625 14.0625H14.375C14.7188 14.0625 15 14.3262 15 14.6484V15.0391ZM15 11.5234V11.9141C15 12.2363 14.7188 12.5 14.375 12.5H5.625C5.28125 12.5 5 12.2363 5 11.9141V11.5234C5 11.2012 5.28125 10.9375 5.625 10.9375H14.375C14.7188 10.9375 15 11.2012 15 11.5234ZM20 5.95215V6.25H13.3333V0H13.651C13.9844 0 14.3021 0.12207 14.5365 0.341797L19.6354 5.12695C19.8698 5.34668 20 5.64453 20 5.95215Z" fill="black"/>
          </svg>
        </div>
        <div className="navlink_text">My files</div>
    </NavLink>
  )
}

export default FilesLink