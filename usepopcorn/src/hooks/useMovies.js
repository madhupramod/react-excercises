import { useEffect, useState } from "react";
import { debounce } from "../utils/utils.js";

const KEY = "<ADD YOUR API KEY>";
const APP_URL = "https://www.omdbapi.com";

export function useMovies(query) {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
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

  return {
    movieList,
    isLoading,
    errorMsg,
  };
}

export function useMoviesDetails(selectedMovieId) {
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

  return {
    isLoading,
    errorMsg,
    movie,
  };
}
