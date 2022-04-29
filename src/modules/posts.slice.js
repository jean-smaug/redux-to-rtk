import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

import { wait } from "../utils";

const initialState = {
  status: "idle",
  posts: [],
  error: null,
};

// Action async = thunk
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    await wait();

    return posts;
  },
  {
    condition: (_arg, api) => {
      const state = api.getState();

      return state.posts.status === "idle";
    },
  }
);

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPosts.pending.type, (state) => {
    state.status = "pending";
  });

  builder.addCase(fetchPosts.fulfilled.type, (state, action) => {
    state.posts = action.payload;
    state.status = "success";
  });

  builder.addCase(fetchPosts.rejected.type, (state, action) => {
    state.error = action.error;
    state.status = "error";
  });
});
