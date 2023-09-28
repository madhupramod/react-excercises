import { useState } from "react";
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
import { useMovies } from "../hooks/useMovies";
import Box from "./box/Box";

function App() {
  const [watchedList, setWatchedList] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movieList, isLoading, errorMsg } = useMovies(query);

  const numresults = movieList ? movieList.length : 0;

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

  function handleAddMovie(movie) {
    setWatchedList((prevList) => [...prevList, movie]);
  }

  function handleonDeleteWatched(id) {
    console.log(id);
    setWatchedList((prevList) =>
      prevList.filter((movie) => movie.imdbID !== id)
    );
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchBox query={query} setQuery={setQuery} />
        <NumResults numResults={numresults} />
      </Header>
      <main className="main">
        <Box>
          {isLoading && <Loading />}
          {errorMsg && <ErrorMessage />}
          {!isLoading && !errorMsg && (
            <MovieList
              movieList={movieList}
              onMovieSelect={handleMovieSelect}
            />
          )}
        </Box>
        <Box>
          {selectedMovie ? (
            <MovieDetail
              selectedMovieId={selectedMovie.imdbID}
              onMovieClose={handleMovieDetailClose}
              watchedList={watchedList}
              onAddMovie={handleAddMovie}
            />
          ) : (
            <WatchedMovieBox
              watchedList={watchedList}
              ondeleteWatched={handleonDeleteWatched}
            />
          )}
        </Box>
      </main>
    </>
  );
}

export default App;
