import React from 'react';

function WeatherDetails(props) {

  return (
    <div className="weather">
      <div className="weather__left">    
        <div className="weather__main-textbox">
          <h2 className="weather__main-text">
            <span className="weather__main-text--temp">16&deg;</span>
            <span className="weather__main-text--city">Manila</span>
          </h2>
        </div>
      </div>
      <div className="weather__right">
        test
      </div>
    </div>
  );
}

export default WeatherDetails;