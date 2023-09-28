import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import Loading from "../../loading/Loading";
import ErrorMessage from "../../error/ErrorMessage";
import StarRating from "../../starRating/StarRating";
import { useMoviesDetails } from "../../../hooks/useMovies";

function MovieDetail({
  selectedMovieId,
  onMovieClose,
  watchedList,
  onAddMovie,
}) {
  const watchedMovie = watchedList.find(
    (movie) => movie.imdbID === selectedMovieId
  );
  const [userRating, setUserRating] = useState(0);
  const { isLoading, errorMsg, movie } = useMoviesDetails(selectedMovieId);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  useEffect(() => {
    function callback(e) {
      console.log(e.code);
      if (e.code === "Escape") {
        onMovieClose();
      }
    }
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [onMovieClose]);

  function handleAddMovie() {
    const newMovie = {
      ...movie,
      Runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
      userRating: userRating,
    };
    onAddMovie(newMovie);
    onMovieClose();
  }
  return (
    <div className="movie-details">
      {isLoading && <Loading />}
      {errorMsg && <ErrorMessage />}
      {!isLoading && !errorMsg && movie && (
        <>
          <header>
            <button className="btn-back" onClick={onMovieClose}>
              &larr;
            </button>
            <img src={poster} alt={`poster of ${title}`} />

            <div className="movie-details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} imdbRating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {watchedMovie ? (
                <>You rated this movie {watchedMovie.userRating} ⭐</>
              ) : (
                <>
                  <StarRating
                    maxStars={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAddMovie}>
                      Add to list
                    </button>
                  )}
                </>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
