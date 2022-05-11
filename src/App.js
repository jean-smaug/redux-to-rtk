import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelectors } from "./modules/posts.slice";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelectors.selectAllAsArray);
  const status = useSelector(postsSelectors.selectStatus);

  if (status === "error") {
    return "Ouups..";
  }

  return (
    <div>
      <button
        onClick={() => {
          // TODO: implement prevent refetch
          dispatch(fetchPosts());
        }}
      >
        Click
      </button>

      {status === "pending"
        ? "Chargement..."
        : posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
}

export default App;
