import React from "react";
import "./WatchedMovie.css";

function WatchedMovie({ watchedMovie, ondeleteWatched }) {
  return (
    <li className="watched-item">
      <img src={watchedMovie.Poster} alt="" />
      <h3>{watchedMovie.Title}</h3>
      <div className="watched-info">
        <span>⭐ {watchedMovie.imdbRating}</span>
        <span>🌟 {watchedMovie.userRating}</span>
        <span>⌛ {watchedMovie.Runtime}</span>

        <button
          className="btn-delete"
          onClick={() => ondeleteWatched(watchedMovie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}

export default WatchedMovie;
