import React from 'react'
import './lower-navbar.css'

export default function LowerNavbar() {
  return (
    <div className='lower-menu-bar'>
          <ul>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Projects</a>
            </li>
            <li>
              <a href="/#">Studio</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
            <li className='upper-menu-bar'>
              <a href="/#">Join as Design Expert</a>
            </li>
            <li className='upper-menu-bar'>
              <a href="/#">Partner with LAND Interiors</a>
            </li>
          </ul>
    </div>
  )
}
