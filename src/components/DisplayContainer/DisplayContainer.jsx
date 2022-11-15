import React from 'react'
import News from '../News/News'

import './DisplayContainer.css'

function DisplayContainer() {

  const topic = "javascript"
  return (
    <div className='displayContainer'>
      <div className="card" id='calender'>Calendar</div>
      <div className="card" id='weather'>Weather</div>
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
