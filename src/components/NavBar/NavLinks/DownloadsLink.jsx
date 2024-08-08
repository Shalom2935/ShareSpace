import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar.scss'

function DownloadsLink({ to, ariaLabel }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}
      aria-label={ariaLabel}  
    >        
        <div className="navlink_icon">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 15C23.4185 15 23.1005 15.1317 22.8661 15.3661C22.6317 15.6005 22.5 15.9185 22.5 16.25V21.25C22.5 21.5815 22.3683 21.8995 22.1339 22.1339C21.8995 22.3683 21.5815 22.5 21.25 22.5H3.75C3.41848 22.5 3.10054 22.3683 2.86612 22.1339C2.6317 21.8995 2.5 21.5815 2.5 21.25V16.25C2.5 15.9185 2.3683 15.6005 2.13388 15.3661C1.89946 15.1317 1.58152 15 1.25 15C0.918479 15 0.600537 15.1317 0.366116 15.3661C0.131696 15.6005 0 15.9185 0 16.25V21.25C0 22.2446 0.395088 23.1984 1.09835 23.9017C1.80161 24.6049 2.75544 25 3.75 25H21.25C22.2446 25 23.1984 24.6049 23.9017 23.9017C24.6049 23.1984 25 22.2446 25 21.25V16.25C25 15.9185 24.8683 15.6005 24.6339 15.3661C24.3995 15.1317 24.0815 15 23.75 15ZM11.6125 17.1375C11.7314 17.2513 11.8716 17.3405 12.025 17.4C12.1746 17.4661 12.3364 17.5003 12.5 17.5003C12.6636 17.5003 12.8254 17.4661 12.975 17.4C13.1284 17.3405 13.2686 17.2513 13.3875 17.1375L18.3875 12.1375C18.6229 11.9021 18.7551 11.5829 18.7551 11.25C18.7551 10.9171 18.6229 10.5979 18.3875 10.3625C18.1521 10.1271 17.8329 9.99489 17.5 9.99489C17.1671 9.99489 16.8479 10.1271 16.6125 10.3625L13.75 13.2375V1.25C13.75 0.918479 13.6183 0.600537 13.3839 0.366116C13.1495 0.131696 12.8315 0 12.5 0C12.1685 0 11.8505 0.131696 11.6161 0.366116C11.3817 0.600537 11.25 0.918479 11.25 1.25V13.2375L8.3875 10.3625C8.27095 10.246 8.13259 10.1535 7.98031 10.0904C7.82803 10.0273 7.66482 9.99489 7.5 9.99489C7.33518 9.99489 7.17197 10.0273 7.01969 10.0904C6.86741 10.1535 6.72905 10.246 6.6125 10.3625C6.49595 10.479 6.4035 10.6174 6.34043 10.7697C6.27735 10.922 6.24489 11.0852 6.24489 11.25C6.24489 11.4148 6.27735 11.578 6.34043 11.7303C6.4035 11.8826 6.49595 12.021 6.6125 12.1375L11.6125 17.1375Z" fill="black"/>
            </svg>
        </div>
        <div className="navlink_text">Downloaded files</div>
    </NavLink>
  )
}

export default DownloadsLink