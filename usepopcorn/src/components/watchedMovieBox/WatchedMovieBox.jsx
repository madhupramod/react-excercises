import React from "react";
import "./watchedMovieBox.css";
import WatchedMovieList from "./watchedMovieList/WatchedMovieList";
import WatchedMovieSummary from "./watchedMovieSummary/WatchedMovieSummary";
function WatchedMovieBox({ watchedList, ondeleteWatched }) {
  return (
    <div>
      <WatchedMovieSummary watchedList={watchedList} />
      <WatchedMovieList
        watchedList={watchedList}
        ondeleteWatched={ondeleteWatched}
      />
    </div>
  );
}

export default WatchedMovieBox;
