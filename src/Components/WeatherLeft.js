import React from 'react';

function WeatherLeft(props) {

  const weatherData = props.weatherData;
  const date = new Date(weatherData.dt * 1000);

  function handleUnitChange(event) {
    const selectedUnit = event.target.dataset.unit;
    props.onTempChange(selectedUnit);
  }

  function isMetric() {
    if (props.units) return props.units === 'metric';
    return false;
  }

  return Object.keys(weatherData).length !== 0 ? (
    <div className="weather__left">    
      <div className="weather__left-content">
        <div className="weather__icon-group">
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" className="weather__icon" />
          <span className="weather__icon-description">
            {weatherData.weather[0].description}
          </span>
        </div>
        <div className="weather__temp-group">
          <span className="weather__temp-value">
            {Math.round(weatherData.main.temp)}&deg;
          </span>
          <p className="weather__temp-units">
            <span 
              className={`weather__temp-unit weather__temp-unit--c ${isMetric() ? "weather__temp-unit--active" : ""}`} 
              onClick={handleUnitChange} 
              data-unit="C">
              C
            </span>
            <span className="weather__temp-unit weather__temp-unit--divider">|</span>
            <span 
              className={`weather__temp-unit weather__temp-unit--c ${!isMetric() ? "weather__temp-unit--active" : ""}`} 
              onClick={handleUnitChange} 
              data-unit="F">
              F
            </span>
          </p>
        </div>
        <div className="weather__city-group">
          <span className="weather__city--name">
            {props.location.city}
            {props.location.state ? `, ${props.location.state}` : null}
            {props.location.country ? `, ${props.location.country}` : null}
          </span>
          <span className="weather__city--datetime">
            {date ? `${date.toDateString()}, ${date.toLocaleTimeString()}` : "---"}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="weather__left">    
      <div className="weather__left-content">
        <div className="weather__main-textbox">
          <h2 className="weather__main-text">
            <div className="weather__main-text--city-group">
              <span className="weather__main-text--city">Weather App</span>
            </div>
          </h2>
        </div>
        <div className="weather__icon-box">
          <img src="https://openweathermap.org/img/wn/11d@2x.png" alt="Weather Icon" className="weather__icon" />
        </div>
      </div>
    </div>
  );
}

export default WeatherLeft;