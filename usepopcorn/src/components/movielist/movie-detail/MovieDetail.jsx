import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import Loading from "../../loading/Loading";
import ErrorMessage from "../../error/ErrorMessage";

const KEY = "<ADD YOUR API KEY>";
const APP_URL = "https://www.omdbapi.com";
function MovieDetail({ selectedMovieId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        setErrorMsg("");
        const res = await fetch(
          `${APP_URL}/?apikey=${KEY}&i=${selectedMovieId}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        setMovie(data);
      } catch (error) {
        setErrorMsg(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [selectedMovieId]);
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
  return (
    <div className="movie-details">
      {isLoading && <Loading />}
      {errorMsg && <ErrorMessage />}
      {!isLoading && !errorMsg && movie && (
        <>
          <header>
            <button className="btn-back"> &larr;</button>
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
            <div className="rating">Rating widget</div>
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
