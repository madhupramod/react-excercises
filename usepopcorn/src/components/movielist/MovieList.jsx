import React from "react";
import "./MovieList.css";
import Movie from "./movie/Movie";
function MovieList({ movieList, onMovieSelect }) {
  return (
    <ul className="movielist">
      {movieList.map((movie) => (
        <Movie key={movie.imdbID} {...movie} onMovieSelect={onMovieSelect} />
      ))}
    </ul>
  );
}

export default MovieList;
