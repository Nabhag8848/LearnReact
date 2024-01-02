import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        placeholder="Search Order #"
        onChange={(e) => setQuery(e.target.value)}
        className="w-30 rounded-lg border border-zinc-500 px-4 py-2 text-base font-medium 
        transition-all duration-100 placeholder:text-zinc-500 focus:outline-none 
        focus:ring focus:ring-zinc-400 focus:ring-opacity-30 md:w-96"
      />
    </form>
  );
}
