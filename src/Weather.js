import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import WeatherLeft from './WeatherLeft';
import WeatherRight from './WeatherRight';

function WeatherDetails() {

  // Update weather details on search
  const [location, setLocation] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [units, setUnits] = useState('metric');
  
  useEffect(() => {
    if (location) {
      Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=${units}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(response => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }, [location, units])

  function handleSearch(location) {
    setLocation(location);
  }

  function handleUnitChange(unit) {
    setUnits(unit === 'C' ? 'metric' : 'imperial');
  }

  return  (
    <div className="weather">
      <WeatherLeft weatherData={weatherData} location={location} onTempChange={handleUnitChange} units={units} />
      <WeatherRight weatherData={weatherData} onSearch={handleSearch} units={units} />
    </div>
  );
}

export default WeatherDetails;