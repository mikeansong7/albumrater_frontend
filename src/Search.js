import React from "react";

function Search({search, setSearch, searchAlbums}) {

  function updateSearch(event) {
    setSearch(event.target.value)
    searchAlbums(event.target.value)
}




  
  return (
    <div  className="searchbar">
      <label htmlFor="search">Search Albums:</label>
      <input 
        type="text"
        id="search"
        value= {search}
        placeholder="Type album name here"
        onChange={updateSearch}
      />
    </div>
  );
}

export default Search;

// console.log(updateSearch)