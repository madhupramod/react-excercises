import React from "react";
import "./MovieList.css";
import Movie from "./movie/Movie";
function MovieList({ movieList }) {
  return (
    <ul className="movielist">
      {movieList.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </ul>
  );
}

export default MovieList;
