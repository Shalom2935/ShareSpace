import React from 'react'
import { hideFail } from './hideFail'
import './ContactFail.scss'

function ContactFail() {

  return (
    <div className='contactfail visually-hidden'>
    <div className="content">
      <div className="icon">
        <svg width="50" height="50" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60.5" cy="60.5" r="56" stroke="#EB0D0D" strokeWidth="9"/>
        <path d="M41 44L80.5 78M41 78L80.5 44" stroke="#EB0D0D" strokeWidth="9"/>
        </svg>
      </div>
      <p className='message'>There was an error sending the message retry</p>
      <div className="action">
        {/* <button className='retry' onClick={handleSubmit}>Retry</button> */}
        <button className='cancel' onClick={hideFail}>Close</button>
      </div>
    </div>
    <div className="overlay"></div>
    </div>
  )
}

export default ContactFail