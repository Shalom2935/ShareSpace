import React from 'react'
import HomeLink from './NavLinks/HomeLink'
import ImportLink from './NavLinks/ImportLink'
import FilesLink from './NavLinks/FilesLink'
import DownloadsLink from './NavLinks/DownloadsLink'
import ContactLink from './NavLinks/ContactLink'
import LogOut from './NavLinks/LogOut'
import './NavBar.scss'
import { hideNav } from './toggleNavVisibility'


// Define an array of links for easier maintenance

const links = [
  { Component: HomeLink, path: '/', label: 'Home' },
  { Component: ImportLink, path: '/import', label: 'Import' },
  { Component: FilesLink, path: '/files', label: 'Files' },
  { Component: DownloadsLink, path: '/downloads', label: 'Downloads' },
  { Component: ContactLink, path: '/contact', label: 'Contact' },
  { Component: LogOut, path: '/connexion', label: 'LogOut' },
]

function NavBar() {
  return (
    <div className='nav'>
      <div className='navbar'>
      <div className="nav_personal">
        <div className="close" onClick={hideNav}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.26975 7.50511L14.6447 2.14261C14.8801 1.90724 15.0124 1.58799 15.0124 1.25511C15.0124 0.922238 14.8801 0.602994 14.6447 0.367615C14.4094 0.132235 14.0901 0 13.7572 0C13.4244 0 13.1051 0.132235 12.8697 0.367615L7.50725 5.74261L2.14475 0.367615C1.90937 0.132235 1.59012 -2.48013e-09 1.25725 0C0.924371 2.48013e-09 0.605128 0.132235 0.369748 0.367615C0.134368 0.602994 0.00213325 0.922238 0.00213325 1.25511C0.00213325 1.58799 0.134368 1.90724 0.369748 2.14261L5.74475 7.50511L0.369748 12.8676C0.252587 12.9838 0.159595 13.1221 0.0961339 13.2744C0.0326731 13.4267 0 13.5901 0 13.7551C0 13.9201 0.0326731 14.0835 0.0961339 14.2358C0.159595 14.3882 0.252587 14.5264 0.369748 14.6426C0.485952 14.7598 0.624203 14.8528 0.776527 14.9162C0.928851 14.9797 1.09223 15.0124 1.25725 15.0124C1.42226 15.0124 1.58564 14.9797 1.73797 14.9162C1.89029 14.8528 2.02854 14.7598 2.14475 14.6426L7.50725 9.26761L12.8697 14.6426C12.986 14.7598 13.1242 14.8528 13.2765 14.9162C13.4289 14.9797 13.5922 15.0124 13.7572 15.0124C13.9223 15.0124 14.0856 14.9797 14.238 14.9162C14.3903 14.8528 14.5285 14.7598 14.6447 14.6426C14.7619 14.5264 14.8549 14.3882 14.9184 14.2358C14.9818 14.0835 15.0145 13.9201 15.0145 13.7551C15.0145 13.5901 14.9818 13.4267 14.9184 13.2744C14.8549 13.1221 14.7619 12.9838 14.6447 12.8676L9.26975 7.50511Z" fill="white"/>
          </svg>
        </div>
        <div className="navbar_logo"></div>
      </div>
      <hr/>
      {links.map(({ Component, path, label }, index) => (
        <Component 
          key={index} 
          to = {path}
          aria-label={label} 
        />
      ))}
    </div>
    <div className="navbar_overlay"></div>
    </div>
  )
}

export default NavBar
