import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function WeatherDetails() {

  // For search input display only
  const [city, setCity] = useState('');

  // Update weather details on search
  const [cityToSearch, setCityToSearch] = useState('');
  const [weatherDetails, setWeatherDetails] = useState({});
  const [units, setUnits] = useState('metric');
  
  useEffect(() => {
    if (cityToSearch) {
      Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(response => {
        setWeatherDetails(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }, [cityToSearch])

  function handleSearchInput(event) {
    const cityName = event.target.value;
    setCity(cityName);
  }

  function handleSearchClick() {
    setCityToSearch(city);
  }

  function isWeatherDetailsEmpty() {
    return Object.keys(weatherDetails).length === 0;
  }
  
  return !isWeatherDetailsEmpty() ? (
    <div className="weather">
      <div className="weather__left">    
        <div className="weather__left-content">
          <div className="weather__icon-group">
            <img src={`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`} className="weather__icon" />
            <span className="weather__icon-description">
              {weatherDetails.weather[0].description}
            </span>
          </div>
          <div className="weather__temp-group">
            <span className="weather__temp-value">
              {Math.round(weatherDetails.main.temp)}&deg;
            </span>
          </div>
          <div className="weather__city-group">
            <span className="weather__city--name">
              {weatherDetails.name}
              {weatherDetails.sys.country ? `, ${weatherDetails.sys.country}` : null}
            </span>
            <span className="weather__city--datetime">
              {new Date(weatherDetails.dt * 1000).toUTCString()}
            </span>
          </div>
        </div>
      </div>
      <div className="weather__right">
        <div className="weather__right-content">
          <div className="weather__search-box">
            <input type="text" value={city} onChange={handleSearchInput} />
            <button type="submit" onClick={handleSearchClick}>Search</button>
          </div>
          <div className="weather__details">
            <h3 className="header-tertiary">Weather Details</h3>
            <div className="weather__details--content">
              <div className="weather__details--text-group">
                <p className="weather__details--label">Weather</p>
                <p className="weather__details--value weather__details--weather-desc">{weatherDetails.weather[0].description}</p>
              </div>
              <div className="weather__details--text-group">
                <p className="weather__details--label">Temp</p>
                <p className="weather__details--value">{(Math.round(weatherDetails.main.temp * 10) / 10).toFixed(1)}&deg;</p>
              </div>
              <div className="weather__details--text-group">
                <p className="weather__details--label">Temp. Min</p>
                <p className="weather__details--value">{(Math.round(weatherDetails.main.temp_min * 10) / 10).toFixed(1)}&deg;</p>
              </div>
              <div className="weather__details--text-group">
                <p className="weather__details--label">Temp. Max</p>
                <p className="weather__details--value">{(Math.round(weatherDetails.main.temp_max * 10) / 10).toFixed(1)}&deg;</p>
              </div>
              <div className="weather__details--text-group">
                <p className="weather__details--label">Humidity</p>
                <p className="weather__details--value">{weatherDetails.main.humidity}%</p>
              </div>
              <div className="weather__details--text-group">
                <p className="weather__details--label">Wind</p>
                <p className="weather__details--value">{`${Math.round(weatherDetails.wind.speed * 3.6)} km/h`}</p>
              </div>
              <div className="weather__details--text-group">
                <p className="weather__details--label">Gusts</p>
                <p className="weather__details--value">{weatherDetails.wind.gust ? `${Math.round(weatherDetails.wind.gust * 3.6)} km/h` : "N/A"}</p>
              </div>
              <div className="weather__details--text-group">
                <p className="weather__details--label">Visibility</p>
                <p className="weather__details--value">{`${weatherDetails.visibility / 1000} km`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="weather">
      <div className="weather__left-empty">    
        <div className="weather__left-empty-content">
          <div className="weather__main-textbox">
            <h2 className="weather__main-text">
              <div className="weather__main-text--city-group">
                <span className="weather__main-text--city">Weather App</span>
              </div>
            </h2>
          </div>
          <div className="weather__icon-box">
            <img src="http://openweathermap.org/img/wn/11d@2x.png" className="weather__icon" />
          </div>
        </div>
      </div>
      <div className="weather__right">
        <input type="text" value={city} onChange={handleSearchInput} />
        <button type="submit" onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
}

export default WeatherDetails;