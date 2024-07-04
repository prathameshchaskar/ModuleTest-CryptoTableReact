import React from "react";
import "./Search.css";

const Search = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default Search;
