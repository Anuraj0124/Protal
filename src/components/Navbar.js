import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {TextField} from "@material-ui/core";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [Active, setActive] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleActive = (value) => setActive(value);

  return (
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/feed' className='navbar-logo' onClick={closeMobileMenu}>
            PROTAL
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <i 
                className='fa fa-search' 
                />
          <div className="SearchBox">

              <TextField
                placeholder="   Search…"
                style={{left:'20vw' , width:'20vw' , backgroundColor:'white' , borderRadius:'5px' }}
                inputProps={{ style: { margin:'0vw 1vw'}}}
              />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'>
              <Link 
                to='/feed' 
                className='nav-links' 
                onClick={closeMobileMenu,()=> handleActive('Home')}
                style={Active=="Home" ? {background:'gray'} : {} }
                >
              <i className='fa fa-home' />
                
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/feed' className='nav-links' onClick={closeMobileMenu,()=>handleActive('Feed')} style={Active=="Feed" ? {background:'gray'} : {} }>
              <i className='fa fa-bolt' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/profile' className='nav-links' onClick={closeMobileMenu,()=>handleActive('User')} style={Active=="User" ? {background:'gray'} : {} }>
              <i className='far fa-user' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/feed' className='nav-links' onClick={closeMobileMenu,()=>handleActive('Settings')} style={Active=="Settings" ? {background:'gray'} : {} }>
              <i className='fa fa-cog' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
