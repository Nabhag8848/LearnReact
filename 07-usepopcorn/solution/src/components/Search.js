import { useRef } from "react";
import { useKey } from "../hooks/useKey";

export default function Search({ query, setQuery, onClear }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return () => {};
    inputEl.current.focus();
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => {
        if (e.target.value === "") {
          onClear();
        }
        setQuery(e.target.value);
      }}
      ref={inputEl}
    />
  );
}
