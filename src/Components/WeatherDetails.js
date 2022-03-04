import React from 'react';

function WeatherDetails(props) {

  const weatherData = props.weatherData;

  function valueToDisplay() {
    switch (props.detailName) {
      case "weather":
        return weatherData.weather[0].description;
      case "temp":
        const temp = tempFormat(weatherData.main.temp);
        return `${temp}\u00B0`;
      case "temp_min":
        const tempMin = tempFormat(weatherData.main.temp_min);
        return `${tempMin}\u00B0`;
      case "temp_max":
        const tempMax = tempFormat(weatherData.main.temp_max);
        return `${tempMax}\u00B0`;
      case "humidity":
        return `${weatherData.main.humidity}%`;
      case "wind":
        return convertToKilometerPerHour(weatherData.wind.speed);
      case "gusts":
        return weatherData.wind.gust ? convertToKilometerPerHour(weatherData.wind.gust) : "N/A";
      case "visibility":
        return `${weatherData.visibility / 1000} km`;
      default:
        return "N/A";
    }
  }

  function tempFormat(value) {
    return (Math.round(value * 10) / 10).toFixed(1);
  }

  function convertToKilometerPerHour(value) {
    if (props.units === 'imperial') {
      return `${Math.round(value * 1.60934)} km/h`;
    }
    return `${Math.round(value * 3.6)} km/h`;
  }

  return (
    <div className="weather__details--text-group">
      <p className="weather__details--label">{props.label}</p>
      <p className={`weather__details--value ${props.capitalize ? "weather__details--weather-desc" : ""}`}>
        {valueToDisplay()}
      </p>
    </div>
  );
}

export default WeatherDetails;