import React from "react";
import "./SearchBox.css";

function SearchBox({ query, setQuery }) {
  return (
    <input
      className="search"
      placeholder="Search for a movie"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBox;
