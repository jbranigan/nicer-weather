import React, { useState } from 'react';

const Forecast = () => {
  
  let [responseObj, setResponseObj] = useState({});

  function getForecast() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=ffadfdafee51c74685a9066b81e5f95e")
    .then(res => res.json())
    .then(res => {
      setResponseObj(res)
    })
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <div>
          {JSON.stringify(responseObj)}
      </div>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  )
}

export default Forecast;
