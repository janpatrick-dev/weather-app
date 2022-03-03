import React, {useState} from 'react';
import WeatherDetails from './WeatherDetails';

function WeatherRight(props) {

  const weatherData = props.weatherData;
  const [city, setCity] = useState('');

  function handleSearchInput(event) {
    const cityName = event.target.value;
    setCity(cityName);
  }

  function handleSearchClick(event) {
    props.onSearch(city);
  }
  
  return Object.keys(weatherData).length !== 0 ? (
    <div className="weather__right">
      <div className="weather__right-content">
        <div className="weather__search-box">
          <input type="text" value={city} onChange={handleSearchInput} />
          <button type="submit" onClick={handleSearchClick}>Search</button>
        </div>
        <div className="weather__details">
          <h3 className="header-tertiary">Weather Details</h3>
          <div className="weather__details--content">
            <WeatherDetails label="Weather" detailName="weather" weatherData={weatherData} units={props.units} capitalize={true} />
            <WeatherDetails label="Temp" detailName="temp" weatherData={weatherData} units={props.units} />
            <WeatherDetails label="Temp Min." detailName="temp_min" weatherData={weatherData} units={props.units} />
            <WeatherDetails label="Temp Max." detailName="temp_max" weatherData={weatherData} units={props.units} />
            <WeatherDetails label="Humidity" detailName="humidity" weatherData={weatherData} units={props.units} />
            <WeatherDetails label="Wind" detailName="wind" weatherData={weatherData} units={props.units} />
            <WeatherDetails label="Gusts" detailName="gusts" weatherData={weatherData} units={props.units} />
            <WeatherDetails label="Visibility" detailName="visibility" weatherData={weatherData} units={props.units} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="weather__right">
      <input type="text" value={city} onChange={handleSearchInput} />
      <button type="submit" onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default WeatherRight;