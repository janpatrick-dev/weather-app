import React, {useEffect, useState} from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Axios from 'axios';
import SearchItem from './SearchItem';

function SearchBar(props) {

  const [city, setCity] = useState('');
  const [filteredData, setFilteredData] = useState([], 5000);

  // Add 0.5s delay before querying search input
  useEffect(() => {
    if (city.length > 1) {
      const timeOutId = setTimeout(() => { 
        Axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(response => {
          setFilteredData(response.data);
        })
        .catch(err => {
          console.log(err);
        })
      }, 500);
      return () => clearTimeout(timeOutId);
    } else {
      setFilteredData([]);
    }
  }, [city]);

  function handleSearchInput(event) {
    const cityName = event.target.value;
    setCity(cityName);
  }

  function handleSearchClick(locationData) {
    const location = {
      city: locationData.name,
      state: locationData.state,
      country: locationData.country,
      lat: locationData.lat,
      lon: locationData.lon
    };

    setCity('');
    props.onSearch(location);
  }

  function handleClearClick(event) {
    setCity('');
  }
  
  return (
    <div className="searchbar__container">
      <div className="searchbar">
        <input type="text" id="searchbar" value={city} onChange={handleSearchInput} className="searchbar__input" autoComplete='off'/>
        <label htmlFor="searchbar" className="searchbar__label">Search: </label>
        <div className="searchbar__icon" onClick={city ? handleClearClick : null}>
          { city ? (<ClearIcon className="searchbar__icon--img" />) : (<SearchIcon className="searchbar__icon--img" />) }
        </div>
      </div>
      { (filteredData.length !== 0 && city) && (
        <div className="searchbar__result">
          {filteredData.map((data, index) => {
            return <SearchItem data={data} key={index} onClick={handleSearchClick} />
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;