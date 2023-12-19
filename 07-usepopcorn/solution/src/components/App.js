import { useState } from "react";
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
import { useMovies } from "../hooks/useMovies";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const KEY = "3f2487b9";

export default function App() {
  const [query, setQuery] = useState("");
  const { movies, error, isLoading, selectedId, setSelectedId } =
    useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

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

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} onClear={handleCloseMovie} />
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
