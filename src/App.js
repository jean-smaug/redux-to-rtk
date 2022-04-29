import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchPosts } from "./modules/posts.slice";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, []);

  if (status === "pending") {
    return "Chargement...";
  }

  if (status === "error") {
    return "Ouups..";
  }

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchPosts());
        }}
      >
        Click
      </button>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}

export default App;
