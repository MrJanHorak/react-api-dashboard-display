import React from 'react';

// Assets
import { BsSun } from 'react-icons/bs';

// Style
import './Weather.css';

function Weather() {
  return (
    <div className='weather'>
      <BsSun />
      Weather
      <BsSun />
    </div>
  );
}

export default Weather;
