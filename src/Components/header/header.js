/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.css';
import { useState, useEffect } from 'react';
import LowerNavbar from '../lower-navbar/lower-navbar';
import UpperNavbar from '../upper-navbar/upper-navbar';

function Header() {
  const [showNavMenu,setShowNavMenu]=useState(false);
  const handleNavMenuBar=()=> {setShowNavMenu(!showNavMenu)};
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className='header'>
      <header className="App-header">
        <UpperNavbar handleNavMenu={handleNavMenuBar}/>
        {
          (width>767) && <LowerNavbar/>
        }
        {
          (width<=767) && showNavMenu && <LowerNavbar/>
        }
      </header>
    </div>
  );
}

export default Header;
