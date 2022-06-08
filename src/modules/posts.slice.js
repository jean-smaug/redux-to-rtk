import {
  createAsyncThunk,
  createEntityAdapter,
  createReducer,
} from "@reduxjs/toolkit";
import { wait } from "../utils";

const postsAdapter = createEntityAdapter();

/**
 * INITIAL STATE
 */
const initialState = {
  status: "idle", // "idle" | "pending" | "succeed" | "error"
  ...postsAdapter.getInitialState(),
};

/**
 * THUNKS
 */
export const fetchPosts = createAsyncThunk(
  "fetchPosts",
  async (_arg, thunkAPI) => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    await wait();

    return posts;
  }
);

/**
 * REDUCER
 */
export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPosts.pending.type, (state) => {
    state.status = "pending";
  });

  builder.addCase(fetchPosts.fulfilled.type, (state, action) => {
    state.status = "succeed";
    postsAdapter.addMany(state, action.payload);
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
