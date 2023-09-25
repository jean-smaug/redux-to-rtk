import { useDispatch, useSelector } from "react-redux";
import PostList from "./modules/PostList.component";
import { fetchPosts, postsSelectors } from "./modules/posts.slice";

function App() {
  const dispatch = useDispatch();
  const status = useSelector(postsSelectors.selectStatus);

  if (status === "error") {
    return (
      <section>
        <strong style={{ fontSize: "40px" }}>Ouups..</strong>
      </section>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          // TODO: implement prevent refetch
          dispatch(fetchPosts());
        }}
      >
        Click me
      </button>

      {status === "pending" ? "Chargement..." : <PostList />}
    </div>
  );
}

export default App;
