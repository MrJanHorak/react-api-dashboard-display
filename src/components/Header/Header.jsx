import React, { useEffect, useState } from 'react';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import './Header.css';

function Header() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div className='headerContainer'>
      <div className='time'>
        <AiOutlineClockCircle />{' '}
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          second: 'numeric',
        })}
      </div>
      <div className='alert'> ALERT / NOTIFICATION / TICKER</div>
      <div className='date'>
        <AiOutlineCalendar />{' '}
        {dateState.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </div>
    </div>
  );
}

export default Header;
