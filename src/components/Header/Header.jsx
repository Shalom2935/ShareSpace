import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import Slogan from '../Slogan/Slogan'
import SearchBarDesktop from '../SearchBar/SearchBarDesktop'
import SearchBarMobile from '../SearchBar/SearchBarMobile'
import './Header.scss'
import { displayNav } from '../NavBar/toggleNavVisibility'

function Header({ searchTerm, onSearch, onSearchClick, onClickSuggestion, disableSearch = true}) {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div>
        <header>
          <div className="logoo">
            <Logo />
            <Slogan />
          </div>
          <SearchBarDesktop searchTerm={searchTerm} onSearch={onSearch} onSearchClick={onSearchClick} disable = {disableSearch} onClickSuggestion={onClickSuggestion}/>
          {showSearch && <SearchBarMobile searchTerm={searchTerm} onSearch={onSearch} onSearchClick={onSearchClick} onClickSuggestion={onClickSuggestion} />}
          <div className="hamburger" onClick={displayNav}>
            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.20312 5.6875H21.7578V8.44375H3.20312V5.6875ZM3.20312 12.6H21.7578V15.4H3.20312V12.6ZM3.20312 19.5563H21.7578V22.3125H3.20312V19.5563Z" fill="white"/>
            </svg>
          </div>
          <div className="search"
            onClick={() => setShowSearch(prev => !prev)}
          >
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.4358 21.7013L18.7525 17.8875C19.9409 16.3153 20.5857 14.3737 20.5833 12.375C20.5833 10.595 20.075 8.85491 19.1227 7.37487C18.1704 5.89483 16.8169 4.74128 15.2333 4.06009C13.6496 3.3789 11.9071 3.20067 10.2259 3.54794C8.54472 3.8952 7.00047 4.75237 5.78841 6.01104C4.57636 7.26972 3.75094 8.87336 3.41653 10.6192C3.08213 12.365 3.25376 14.1746 3.90971 15.8192C4.56567 17.4637 5.6765 18.8693 7.10173 19.8582C8.52695 20.8472 10.2026 21.375 11.9167 21.375C13.8414 21.3775 15.711 20.7079 17.225 19.4738L20.8975 23.2988C20.9982 23.4042 21.118 23.4879 21.25 23.545C21.3821 23.6021 21.5237 23.6315 21.6667 23.6315C21.8097 23.6315 21.9513 23.6021 22.0833 23.545C22.2153 23.4879 22.3351 23.4042 22.4358 23.2988C22.5374 23.1942 22.618 23.0697 22.673 22.9327C22.728 22.7956 22.7563 22.6485 22.7563 22.5C22.7563 22.3515 22.728 22.2044 22.673 22.0674C22.618 21.9303 22.5374 21.8058 22.4358 21.7013ZM5.41667 12.375C5.41667 11.04 5.79789 9.73494 6.51212 8.62491C7.22635 7.51487 8.24151 6.64971 9.42923 6.13882C10.6169 5.62793 11.9239 5.49425 13.1848 5.7547C14.4456 6.01515 15.6038 6.65803 16.5129 7.60203C17.4219 8.54604 18.041 9.74877 18.2918 11.0581C18.5426 12.3675 18.4139 13.7247 17.9219 14.9581C17.4299 16.1915 16.5968 17.2457 15.5279 17.9874C14.459 18.7291 13.2022 19.125 11.9167 19.125C10.1928 19.125 8.53946 18.4138 7.32048 17.148C6.10149 15.8821 5.41667 14.1652 5.41667 12.375Z" fill="white"/>
            </svg>
            </div>  
        </header>
    </div>
  )
}

export default Header