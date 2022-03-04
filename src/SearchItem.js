import React from 'react';

function SearchItem(props) {

  const location = `${props.data.name}, ${props.data.state && (`${props.data.state},`)} ${props.data.country}`

  function handleClickItem() {
    props.onClick(props.data);
  }
  
  return  (
    <p className="searchbar__result--item" onClick={handleClickItem}>
      {location}
    </p>
  );
}

export default SearchItem;