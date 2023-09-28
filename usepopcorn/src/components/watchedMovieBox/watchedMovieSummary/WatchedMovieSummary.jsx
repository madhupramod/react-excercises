import React from "react";
import "./WatchedMovieSummary.css";

function WatchedMovieSummary({ watchedList }) {
  const watchedMovieLength = watchedList.length;
  const averageRating =
    watchedList.reduce((acc, i) => acc + i.userRating, 0) / watchedMovieLength;

  const averageRuntime =
    watchedList.reduce((acc, i) => acc + i.Runtime, 0) / watchedMovieLength;

  const averageImdbRating =
    watchedList.reduce((acc, i) => acc + i.imdbRating, 0) / watchedMovieLength;

  // const averageRuntime=watchedList.reduce((acc,i)=>acc+)
  return (
    <div className="watched-summary">
      <h2>Movies you watched</h2>
      <div className="summary-stats">
        <span className="summary-stat">🎞️ {watchedMovieLength}</span>
        <span className="summary-stat">⭐ {averageImdbRating}</span>
        <span className="summary-stat">⭐ {averageRating}</span>
        <span className="summary-stat">⌛ {averageRuntime}</span>
      </div>
    </div>
  );
}

export default WatchedMovieSummary;
