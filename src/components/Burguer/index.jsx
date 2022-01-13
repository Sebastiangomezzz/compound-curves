/* eslint-disable jsx-a11y/anchor-is-valid */
import './Burguer.styles.css';
import { elastic as Menu } from 'react-burger-menu';
import React from 'react';

function Burguer() {
//   const showSettings = (event)=>{
//       event.preventDefault();

//   }
  return (
    <Menu
      right
      noTransition
      width={'20%'}
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
    >
      <a id='home' className='menu-item' href='/'>
        Home
      </a>
      <a id='about' className='menu-item' href='/services'>
        About
      </a>
      <a id='contact' className='menu-item' href='/contact'>
        Contact
      </a>
      {/* <a onClick={showSettings} className='menu-item--small' href=''>
            Settings
          </a> */}
    </Menu>
  );
}

export default Burguer;
