import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post.component";
import { postsSelectors } from "./posts.slice";

const PostList = () => {
  const postsIds = useSelector(postsSelectors.selectIds);

  return (
    <section>
      {postsIds.map((postId) => (
        <Post key={postId} id={postId} />
      ))}
    </section>
  );
};

export default PostList;
