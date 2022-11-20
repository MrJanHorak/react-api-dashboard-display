import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// componets
import News from '../News/News'
import Weather from '../Weather/Weather'
import Calendar from '../CalendarWidget/CalendarWidget'

//Styles
import './DisplayContainer.css'

//assets
import weatherData from '../../assets/sampleData/weather.js'

function DisplayContainer() {
  const [weather, setWeather] = useState(weatherData);

  const topic = "javascript"
  
  // setting up weather api call
  // const options = {
  //   method: 'GET',
  //   url: `https://api.openweathermap.org/data/2.5/weather?lat=33.417&lon=-82.3097&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`,
  // };

  // const weatherData = () => { 
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //     setWeather(response.data);
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // }

  useEffect(()=>{
    // weatherData()
   },[weather])

  return (
    <div className='displayContainer'>
      <div className="card" id='calender'><Calendar /></div>
      <div className="card" id='weather'><Weather weather={weather} /></div>
      <div className="card" id='financials'>Stocks</div>
      <div className="card" id='health'>Health Stats</div>
      <div className="card" id='recipe'>recipes</div>
      <div className="card" id='main'>Main</div>
      <div className="card" id='news'><News topic={topic} /></div>
      <div className="card" id='pictures'>Pictures</div>
      <div className="card" id='music'>music player</div>
    </div>
  )
}

export default DisplayContainer
