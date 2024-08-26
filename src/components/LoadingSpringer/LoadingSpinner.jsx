import React from 'react'
import './LoadingSpinner.scss'
function LoadingSpinner() {
  return (
    <div className='load'>    
      <div className='loading'>
      <div className="loading_spinner"></div>
    </div>
    <div className="overlay"></div>
    </div>
  )
}

export default LoadingSpinner