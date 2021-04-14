import React from "react";

function Search({search, setSearch, searchAlbums}) {

  function updateSearch(event) {
    setSearch(event.target.value)
    searchAlbums(event.target.value)
    console.log(updateSearch)
}




  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Albums:</label>
      <input
        type="text"
        id="search"
        value= {search}
        placeholder="Type a name to search..."
        onChange={updateSearch}
      />
    </div>
  );
}

export default Search;

// console.log(updateSearch)