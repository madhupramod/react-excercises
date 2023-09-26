import { useEffect, useState } from "react";
import Header from "./header/Header";
import Logo from "./logo/Logo";
import NumResults from "./numResults/NumResults";
import SearchBox from "./searchBox/SearchBox";
import Loading from "./loading/Loading";
import ErrorMessage from "./error/ErrorMessage";
import MovieList from "./movielist/MovieList";
import WatchedMovieBox from "./watchedMovieBox/WatchedMovieBox";
import "./App.css";
import MovieDetail from "./movielist/movie-detail/MovieDetail";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const KEY = "<ADD YOUR API KEY>";
const APP_URL = "https://www.omdbapi.com";
const debounce = (func, delay = 1000) => {
  let timeoutId;
  if (timeoutId) {
    clearTimeout();
  }
  return function (...args) {
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchedList, setWatchedList] = useState(tempWatchedData);
  const [query, setQuery] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const numresults = movieList ? movieList.length : 0;

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsloading(true);
        setErrorMsg("");
        const res = await fetch(`${APP_URL}/?apikey=${KEY}&s=${query}`);
        if (!res.ok) {
          throw new Error("Could not fetch");
        }

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        setMovieList(data.Search);
      } catch (error) {
        setErrorMsg(error);
      } finally {
        setIsloading(false);
      }
    }
    if (query.length > 2) {
      debounce(fetchMovies, 1000)();
    }
  }, [query]);

  function handleMovieSelect(imdbID) {
    if (selectedMovie?.imdbID === imdbID) {
      setSelectedMovie(null);
      return;
    }
    const foundMovie = movieList.find((m) => m.imdbID === imdbID);
    setSelectedMovie(foundMovie);
  }

  function handleMovieDetailClose() {
    setSelectedMovie("");
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchBox query={query} setQuery={setQuery} />
        <NumResults numResults={numresults} />
      </Header>
      <main className="main">
        <div className="box">
          {isLoading && <Loading />}
          {errorMsg && <ErrorMessage />}
          {!isLoading && !errorMsg && (
            <MovieList
              movieList={movieList}
              onMovieSelect={handleMovieSelect}
            />
          )}
        </div>
        <div className="box">
          {selectedMovie ? (
            <MovieDetail
              selectedMovieId={selectedMovie.imdbID}
              onMovieClose={handleMovieDetailClose}
            />
          ) : (
            <WatchedMovieBox />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
