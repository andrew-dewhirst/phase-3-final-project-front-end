import React from "react";

function Search({ searchTerm, setSearchTerm }) {

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <div id="search">
      <input
        value={searchTerm}
        type="text"
        id="search"
        placeholder="Search our locations!"
        onChange={handleSearch}
        />
    </div>
  )
};

export default Search;