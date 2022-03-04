import React from 'react';

function SearchItem(props) {

  function handleClickItem() {
    props.onClick(props.data);
  }
  
  return  (
    <p className="searchbar__result--item" onClick={handleClickItem}>
      { props.data.name }, { props.data.state && (`${props.data.state},`) } { props.data.country }
    </p>
  );
}

export default SearchItem;