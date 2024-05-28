import './upper-navbar.css'
import React from 'react'
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import {ReactComponent as NavMenu} from '../../assets/icons/nav-menu.svg';

export default function UpperNavbar({handleNavMenu}) {
  return (
    <div className='upper-header'>
      <Logo className='logo'/>
      <span className='spacer'/>
      <div>
        <NavMenu className='nav-menu-btn' onClick={handleNavMenu}/>
      </div>
      <ul>
        <li>
          <a href="/#">Join as Design Expert</a>
        </li>
        <li>
          <a href="/#">Partner with LAND Interiors</a>
        </li>
      </ul>
    </div>
  )
}
