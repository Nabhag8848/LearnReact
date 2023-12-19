import { useEffect, useState } from "react";

export const KEY = "3f2487b9";

export function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

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
      setSelectedId("");
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error, selectedId, setSelectedId };
}
