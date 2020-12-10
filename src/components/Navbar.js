import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {InputBase} from "@material-ui/core";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/feed' className='navbar-logo' onClick={closeMobileMenu}>
            PROTAL
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className="SearchBox">

              <InputBase
                placeholder="   Search…"
                style={{left:'30vw' , backgroundColor:'white' , borderRadius:'5px' }}
              />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'>
              <Link to='/feed' className='nav-links' onClick={closeMobileMenu}>
              <i className='fa fa-home' />
                
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/feed' className='nav-links' onClick={closeMobileMenu}>
              <i className='fa fa-bolt' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
              <i className='far fa-user' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/feed' className='nav-links' onClick={closeMobileMenu}>
              <i className='fa fa-cog' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
