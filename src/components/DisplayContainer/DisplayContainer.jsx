import React from 'react'
import News from '../News/News'

function DisplayContainer() {

  const topic = "javascript"
  return (
    <div>
      <div className="card">Many little card divs</div>
      <div className="card">Many little card divs</div>
      <div className="card">Many little card divs</div>
      <div className="main">Main Focus Screen</div>
      <News topic={topic} />
      <div className="card">Many little card divs</div>
      <div className="card">Many little card divs</div>
      <div className="card">Many little card divs</div>
    </div>
  )
}

export default DisplayContainer
