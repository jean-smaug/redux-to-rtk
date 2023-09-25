import { wait } from "../utils";

/**
 * INITIAL STATE
 */
const initialState = {
  status: "idle", // "idle" | "pending" | "fulfilled" | "error"
  ids: [],
  entities: {},
};

/**
 * ACTION TYPE
 */
const FETCH_POSTS_PENDING = "posts/FETCH_POSTS_PENDING";
const FETCH_POSTS_FULFILLED = "posts/FETCH_POSTS_FULFILLED";

/**
 * ACTION CREATOR
 */
const fetchPostsPending = () => ({
  type: FETCH_POSTS_PENDING,
});

const fetchPostsFulfilled = (posts) => ({
  type: FETCH_POSTS_FULFILLED,
  payload: posts,
});

/**
 * THUNKS
 */
export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsPending());

  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  await wait();

  dispatch(fetchPostsFulfilled(posts));
};

/**
 * REDUCER
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING: {
      return { ...state, status: "pending" };
    }

    case FETCH_POSTS_FULFILLED: {
      const postsIds = action.payload.map((post) => post.id);
      const postsEntities = action.payload.reduce(
        (acc, post) => ({ ...acc, [post.id]: post }),
        {}
      );

      return {
        ...state,
        status: "fulfilled",
        ids: postsIds,
        entities: postsEntities,
      };
    }

    default: {
      return state;
    }
  }
};

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
