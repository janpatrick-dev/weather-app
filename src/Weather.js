import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import WeatherLeft from './WeatherLeft';
import WeatherRight from './WeatherRight';

function WeatherDetails() {

  // Update weather details on search
  const [cityToSearch, setCityToSearch] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [units, setUnits] = useState('metric');
  
  useEffect(() => {
    if (cityToSearch) {
      Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(response => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }, [cityToSearch, units])

  function handleSearch(cityToSearch) {
    setCityToSearch(cityToSearch);
  }

  function handleUnitChange(unit) {
    setUnits(unit === 'C' ? 'metric' : 'imperial');
  }

  return  (
    <div className="weather">
      <WeatherLeft weatherData={weatherData} onTempChange={handleUnitChange} units={units} />
      <WeatherRight weatherData={weatherData} onSearch={handleSearch} units={units} />
    </div>
  );
}

export default WeatherDetails;