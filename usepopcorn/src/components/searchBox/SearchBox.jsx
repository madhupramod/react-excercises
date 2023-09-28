import React, { useEffect, useRef } from "react";
import "./SearchBox.css";
import { useKey } from "../../hooks/useKey";

function SearchBox({ query, setQuery }) {
  const searchInput = useRef();

  useKey("Enter", () => {
    if (document.activeElement === searchInput.current) {
      return;
    }

    searchInput.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      placeholder="Search for a movie"
      onChange={(e) => setQuery(e.target.value)}
      ref={searchInput}
    />
  );
}

export default SearchBox;
