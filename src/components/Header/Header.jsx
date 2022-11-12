import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className='headerContainer'>
      <div className='time'>12:00 AM</div>
      <div className='alert'> ALERT / NOTIFICATION / TICKER</div>
      <div className='date'>12 November 2022</div>
    </div>
  );
}

export default Header;
