import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";
import Main from "./Main";
import Box from "./Box";
import Loader from "./Loader";
import MovieList from "./MovieList";
import ErrorMessage from "./ErrorMessage";
import MovieDetails from "./MovieDetails";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";

export const KEY = "3f2487b9";


export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleWatchedMovies(movie) {
    setWatched([...watched, movie]);
    setSelectedId(null);
  }

  function handleRemoveMovie(id) {
    setWatched((movies) => movies.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error("Something went wrong while fetching movies");
          }

          const data = await res.json();
          if (data.Response === "False") {
            throw new Error(data.Error);
          }
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name === "AbortError") return;
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.trim().length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} setSelectedId={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onMovieClose={handleCloseMovie}
              onAddMovie={handleWatchedMovies}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onRemoveMovie={handleRemoveMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
