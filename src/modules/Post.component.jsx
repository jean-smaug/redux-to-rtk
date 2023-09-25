import React from "react";
import { useSelector } from "react-redux";
import { postsSelectors } from "./posts.slice";

const Post = (props) => {
  const post = useSelector(postsSelectors.selectById(props.id));

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        margin: "10px auto",
        width: "calc(100% - 50px)",
        padding: "10px",
      }}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
