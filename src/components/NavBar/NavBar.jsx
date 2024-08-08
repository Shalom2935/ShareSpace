import React from 'react'
import HomeLink from './NavLinks/HomeLink'
import ImportLink from './NavLinks/ImportLink'
import FilesLink from './NavLinks/FilesLink'
import DownloadsLink from './NavLinks/DownloadsLink'
import ContactLink from './NavLinks/ContactLink'
import './NavBar.scss'

// Define an array of links for easier maintenance

const links = [
  { Component: HomeLink, path: '/', label: 'Home' },
  { Component: ImportLink, path: '/import', label: 'Import' },
  { Component: FilesLink, path: '/files', label: 'Files' },
  { Component: DownloadsLink, path: '/downloads', label: 'Downloads' },
  { Component: ContactLink, path: '/contact', label: 'Contact' },
]

function NavBar() {
  return (
    <div className='navbar'>
      {links.map(({ Component, path, label }, index) => (
        <Component 
          key={index} 
          to = {path}
          aria-label={label} 
        />
      ))}
    </div>
  )
}

export default NavBar
