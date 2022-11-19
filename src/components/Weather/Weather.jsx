import React from 'react';

// Assets
import { BsSun } from 'react-icons/bs';
import { RiCelsiusLine } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';
import { TbTemperature } from 'react-icons/tb';
import { VscPerson } from 'react-icons/vsc';

// Style
import './Weather.css';

function Weather({ weather }) {
  if (Object.keys(weather).length) {
    return (
      <div className='weather'>
        <BsSun />
        <div>
          <p>
            <TbTemperature />
            {weather.main.temp} <RiCelsiusLine />
            <TbTemperature />
            <VscPerson />
            {weather.main.feels_like} <RiCelsiusLine />
            <WiHumidity />
            {weather.main.humidity}
          </p>
          <p>{weather.weather[0].description}</p>
        </div>
        <BsSun />
      </div>
    );
  } else {
    <>Loadting</>;
  }
}

export default Weather;
