import React from 'react'
import Logo from '../Logo/Logo'
import Slogan from '../Slogan/Slogan'
import SearchBarDesktop from '../SearchBar/SearchBarDesktop'
import './Header.scss'

function Header({ searchTerm, onSearch, onSearchClick }) {
  return (
    <div>
        <header>
          <div className="logoo">
            <Logo />
            <Slogan />
          </div>
          <SearchBarDesktop searchTerm={searchTerm} onSearch={onSearch} onSearchClick={onSearchClick} />  
        </header>
    </div>
  )
}

export default Header