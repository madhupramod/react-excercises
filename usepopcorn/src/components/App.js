import { useEffect, useState } from "react";
import Header from "./header/Header";
import Logo from "./logo/Logo";
import NumResults from "./numResults/NumResults";
import SearchBox from "./searchBox/SearchBox";
import Loading from "./loading/Loading";
import Error from "./error/Error";
import MovieList from "./movielist/MovieList";
import WatchedMovieBox from "./watchedMovieBox/WatchedMovieBox";
import "./App.css";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

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

function App() {
  const [movieList, setMovieList] = useState(tempMovieData);
  const [watchedList, setWatchedList] = useState(tempWatchedData);
  const [query, setQuery] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const numresults = movieList ? movieList.length : 0;

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsloading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        const data = await res.json();
        if (data.response === "False") {
          throw new Error("Movie Not Found");
        }
        setMovieList(data.Search);
      } catch (error) {
      } finally {
        setIsloading(false);
        setErrorMsg("");
      }
    }
    if (query.length > 2) {
      fetchMovies();
    }
  }, [query]);

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
          {errorMsg && <Error />}
          {!isLoading && !errorMsg && <MovieList movieList={movieList} />}
        </div>
        <div className="box">
          <WatchedMovieBox />
        </div>
      </main>
    </>
  );
}

export default App;
