import React from 'react';
import Axios from 'axios';
import Weather from './Weather';


function App() {
  
  Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Manila&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
