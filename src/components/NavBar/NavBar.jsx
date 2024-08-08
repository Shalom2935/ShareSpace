import React from 'react'
import HomeLink from './NavLinks/HomeLink'
import ImportLink from './NavLinks/ImportLink'
import FilesLink from './NavLinks/FilesLink'
import DownloadsLink from './NavLinks/DownloadsLink'
import ContactLink from './NavLinks/ContactLink'
import './NavBar.scss'

// Define an array of links for easier maintenance
const links = [
  { Component: HomeLink, label: 'Home' },
  { Component: ImportLink, label: 'Import' },
  { Component: FilesLink, label: 'Files' },
  { Component: DownloadsLink, label: 'Downloads' },
  { Component: ContactLink, label: 'Contact' },
]

function NavBar() {
  return (
    <div className='navbar'>
      {links.map(({ Component, label }, index) => (
        <Component key={index} aria-label={label} />
      ))}
    </div>
  )
}

export default NavBar
