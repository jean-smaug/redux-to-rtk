import {
  createAsyncThunk,
  createReducer,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { wait } from "../utils";

/**
 * ENTITY ADAPTER
 */
const postsAdapter = createEntityAdapter();

/**
 * INITIAL STATE
 */
const initialState = {
  status: "idle", // "idle" | "pending" | "succeed" | "error"
  ...postsAdapter.getInitialState(),
  error: null,
};

/**
 * THUNKS
 */
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  await wait();

  return posts;
});

/**
 * REDUCER
 */
export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPosts.pending.type, (state) => {
    state.status = "pending";
  });

  builder.addCase(fetchPosts.fulfilled.type, (state, action) => {
    postsAdapter.addMany(state, action.payload);

    state.status = "succeed";
  });

  builder.addCase(fetchPosts.rejected.type, (state, action) => {
    state.status = "error";
    state.error = action.error;
  });
});

/**
 * SELECTORS
 */
const selectIds = (state) => {
  return state.posts.ids;
};

const selectById = (id) => (state) => {
  return state.posts.entities[id];
};

const selectStatus = (state) => {
  return state.posts.status;
};

export const postsSelectors = {
  selectIds,
  selectStatus,
  selectById,
};
