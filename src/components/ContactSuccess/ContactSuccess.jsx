import React from 'react'
import { handleReload } from './handleReload'
import './ContactSuccess.scss'

function ContactSuccess() {
  return (
    <div className='contactsuccess visually-hidden'>
    <div className="content">
      <div className="icon">
        <svg width="50" height="50" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60.5" cy="60.5" r="56" stroke="#0DEB0D" strokeWidth="9"/>
        <path d="M36 60.5C43.6152 70.2631 45.8848 71.2369 53.5 81L86 41" stroke="#0DEB0D" strokeWidth="9"/>
        </svg>
      </div>
      <p className='message'>Your message has been sent</p>
      <button onClick={handleReload}>Ok</button>
    </div>
    <div className="overlay"></div>
    </div>
  )
}

export default ContactSuccess