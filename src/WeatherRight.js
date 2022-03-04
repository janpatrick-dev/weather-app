import React from 'react';
import SearchBar from './SearchBar';
import WeatherDetails from './WeatherDetails';

function WeatherRight(props) {

  const weatherData = props.weatherData;
  
  return Object.keys(weatherData).length !== 0 ? (
    <div className="weather__right">
      <div className="weather__right-content">
        <SearchBar onSearch={props.onSearch} />
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
      <div className="weather__right-content">
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}

export default WeatherRight;