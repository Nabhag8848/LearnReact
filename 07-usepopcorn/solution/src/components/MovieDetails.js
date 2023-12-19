import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";
import { KEY } from "./App";
import { useKey } from "../hooks/useKey";
export default function MovieDetails({
  selectedId,
  onMovieClose,
  onAddMovie,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const countRef = useRef(0);

  const isRated = watched.findIndex((e) => e.imdbID === movie.imdbID);
  function handleAddWatchedMovies() {
    const countDecision = countRef.current;

    const newMovie = {
      imdbID: selectedId,
      poster: movie.poster,
      title: movie.title,
      imdbRating: Number(movie.imdbRating),
      runtime: Number(movie.runtime.split(" ").at(0)),
      userRating,
      countDecision,
    };

    onAddMovie(newMovie);
  }

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  useKey("Escape", onMovieClose);

  useEffect(() => {
    if (!movie.title) return;
    document.title = `Movie | ${movie.title}`;

    return function () {
      document.title = "usePopcorn";
    };
  }, [movie.title]);

  useEffect(
    function () {
      async function getMovieDetails(id) {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${id}`
        );
        const data = await res.json();

        const {
          Poster: poster,
          Year: year,
          Title: title,
          Released: released,
          Genre: genre,
          imdbRating,
          Plot: plot,
          Actors: actors,
          Director: director,
          Runtime: runtime,
          imdbID,
        } = data;

        setMovie({
          poster,
          year,
          title,
          released,
          genre,
          imdbRating,
          plot,
          actors,
          director,
          runtime,
          imdbID,
        });

        setIsLoading(false);
      }

      getMovieDetails(selectedId);
    },
    [selectedId]
  );
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button className="btn-back" onClick={onMovieClose}>
            &larr;
          </button>
          <header>
            <img src={movie.poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{movie.title}</h2>
              <p>
                {movie.released} &bull; {movie.runtime}
              </p>
              <p>{movie.genre}</p>
              <p>
                <span>⭐️</span>
                {movie.imdbRating} IMDb Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {isRated < 0 ? (
                <>
                  <StarRating
                    size={24}
                    maxRating={10}
                    onSetRate={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="btn-add"
                      onClick={handleAddWatchedMovies}
                    >
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You Already Rated {watched.at(isRated).userRating}
                  <span> ⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{movie.plot}</em>
            </p>
            <p>Starring {movie.actors}</p>
            <p>Directed by {movie.director}</p>
          </section>
        </>
      )}
    </div>
  );
}
