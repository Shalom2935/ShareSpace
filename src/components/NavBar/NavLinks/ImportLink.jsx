import React from 'react'
import '../NavBar.scss'

function ImportLink() {
  return (
    <div className='navlink'>
        <div className="navlink_icon">
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.8813 8.41667C22.8813 8.33333 22.8937 8.25 22.8937 8.16667C22.8937 3.65278 19.6562 0 15.6625 0C12.7812 0 10.3063 1.90278 9.14375 4.65278C8.6375 4.36806 8.06875 4.20139 7.46875 4.20139C5.625 4.20139 4.0875 5.72222 3.79375 7.70833C1.58125 8.55556 0 10.9097 0 13.6806C0 17.1667 2.50625 20 5.59375 20H12V14.4444H8.9875L14 8.63194L19.0125 14.4375H16V19.9931H22.8937C25.7188 19.9931 28 17.3889 28 14.2014C28 11.0139 25.7063 8.42361 22.8813 8.41667Z" fill="white"/>
            </svg>
        </div>
        <div className="navlink_text">Import a file</div>
    </div>
  )
}

export default ImportLink