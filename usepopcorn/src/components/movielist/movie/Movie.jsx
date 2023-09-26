import React from "react";
import "./Movie.css";
function Movie({ imdbID, Title, Poster, Year }) {
  return (
    <li className="list-item">
      <img src={Poster} alt="" />
      <div>
        <h3>{Title}</h3>
        <p>🗓 {Year}</p>
      </div>
    </li>
  );
}

export default Movie;
