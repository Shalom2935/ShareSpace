import React from 'react'
import './SearchBarDesktop.scss'

function SearchBarDesktop() {
  return (
    <div className='searchdesktop'>
        <input type="text" />
        <div className="searchdesktop_searchicon"></div>
        <div className="searchdesktop_filtericon"></div>
    </div>
  )
}

export default SearchBarDesktop