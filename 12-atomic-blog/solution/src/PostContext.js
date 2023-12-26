import { faker } from "@faker-js/faker";
import { createContext, useContext, useMemo, useState } from "react";
import { useSearchPost } from "./SearchPostContext";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const { searchQuery } = useSearchPost();

  const searchedPosts = useMemo(
    function () {
      return searchQuery.length > 0
        ? posts.filter((post) =>
            `${post.title} ${post.body}`
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
        : posts;
    },
    [posts, searchQuery]
  );

  const value = useMemo(
    function () {
      return {
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
      };
    },
    [searchedPosts]
  );

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of PostProvider");
  return context;
}

export { usePosts, PostProvider };
