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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        style={{ width: "80%", margin: "auto", marginTop: "10px" }}
        onClick={() => {
          // TODO: implement prevent refetch
          dispatch(fetchPosts());
        }}
      >
        Click me
      </button>

      {status === "pending" ? (
        <div style={{ margin: "auto", marginTop: "10px" }}>Loading...</div>
      ) : (
        <PostList />
      )}
    </div>
  );
}

export default App;
