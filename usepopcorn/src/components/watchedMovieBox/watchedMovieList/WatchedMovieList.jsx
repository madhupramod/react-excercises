import React from "react";
import "./WatchedMovieList.css";
import WatchedMovie from "./watchedMovie/WatchedMovie";

function WatchedMovieList({ watchedList, ondeleteWatched }) {
  return (
    <ul className="watched-list">
      {watchedList.map((watchedMovie) => (
        <WatchedMovie
          key={watchedMovie.imdbID}
          watchedMovie={watchedMovie}
          ondeleteWatched={ondeleteWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
