import React, {useState} from 'react';

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
            <div className="weather__details--text-group">
              <p className="weather__details--label">Weather</p>
              <p className="weather__details--value weather__details--weather-desc">{weatherData.weather[0].description}</p>
            </div>
            <div className="weather__details--text-group">
              <p className="weather__details--label">Temp</p>
              <p className="weather__details--value">{(Math.round(weatherData.main.temp * 10) / 10).toFixed(1)}&deg;</p>
            </div>
            <div className="weather__details--text-group">
              <p className="weather__details--label">Temp. Min</p>
              <p className="weather__details--value">{(Math.round(weatherData.main.temp_min * 10) / 10).toFixed(1)}&deg;</p>
            </div>
            <div className="weather__details--text-group">
              <p className="weather__details--label">Temp. Max</p>
              <p className="weather__details--value">{(Math.round(weatherData.main.temp_max * 10) / 10).toFixed(1)}&deg;</p>
            </div>
            <div className="weather__details--text-group">
              <p className="weather__details--label">Humidity</p>
              <p className="weather__details--value">{weatherData.main.humidity}%</p>
            </div>
            <div className="weather__details--text-group">
              <p className="weather__details--label">Wind</p>
              <p className="weather__details--value">{`${Math.round(weatherData.wind.speed * 3.6)} km/h`}</p>
            </div>
            <div className="weather__details--text-group">
              <p className="weather__details--label">Gusts</p>
              <p className="weather__details--value">{weatherData.wind.gust ? `${Math.round(weatherData.wind.gust * 3.6)} km/h` : "N/A"}</p>
            </div>
            <div className="weather__details--text-group">
              <p className="weather__details--label">Visibility</p>
              <p className="weather__details--value">{`${weatherData.visibility / 1000} km`}</p>
            </div>
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