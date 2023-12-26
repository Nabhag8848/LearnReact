import { createContext, useContext, useMemo, useState } from "react";

const SearchPostContext = createContext();

function SearchPostProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  const value = useMemo(
    function () {
      return {
        searchQuery,
        setSearchQuery,
      };
    },
    [searchQuery]
  );
  
  return (
    <SearchPostContext.Provider value={value}>
      {children}
    </SearchPostContext.Provider>
  );
}

function useSearchPost() {
  const context = useContext(SearchPostContext);
  if (context === undefined)
    throw new Error("SearchPostContext is used outside of SearchPostProvider");
  return context;
}

export { SearchPostProvider, useSearchPost };
