import React, { useEffect, useRef } from "react";
import "./SearchBox.css";

function SearchBox({ query, setQuery }) {
  const searchInput = useRef();
  useEffect(() => {
    function callback(e) {
      if (document.activeElement === searchInput.current) {
        return;
      }
      if (e.code === "Enter") {
        searchInput.current.focus();
      }
    }
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [searchInput]);
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
