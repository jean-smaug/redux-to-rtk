import { wait } from "../utils";

/**
 * INITIAL STATE
 */
const initialState = {
  status: "idle", // "idle" | "pending" | "succeed" | "error"
  ids: [],
  entities: {},
  error: null,
};

/**
 * ACTION TYPE
 */
const FETCH_POSTS_PENDING = "posts/FETCH_POSTS_PENDING";
const FETCH_POSTS_SUCCEED = "posts/FETCH_POSTS_SUCCEED";
const FETCH_POSTS_ERROR = "posts/FETCH_POSTS_ERROR";

/**
 * ACTION CREATOR
 */
const fetchPostsPending = () => ({
  type: FETCH_POSTS_PENDING,
});

const fetchPostsSucceed = (posts) => ({
  type: FETCH_POSTS_SUCCEED,
  payload: posts,
});

const fetchPostsError = (error) => ({
  type: FETCH_POSTS_ERROR,
  error: error,
});

/**
 * THUNKS
 */
export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsPending());

  try {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    await wait();

    dispatch(fetchPostsSucceed(posts));
  } catch (error) {
    dispatch(fetchPostsError(error));
  }
};

/**
 * REDUCER
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING: {
      return { ...state, status: "pending" };
    }

    case FETCH_POSTS_SUCCEED: {
      const postsIds = action.payload.map((post) => post.id);
      const postsEntities = action.payload.reduce(
        (acc, post) => ({ ...acc, [post.id]: post }),
        {}
      );

      return {
        ...state,
        status: "succeed",
        ids: postsIds,
        entities: postsEntities,
      };
    }

    case FETCH_POSTS_ERROR: {
      return { ...state, status: "error", error: action.error };
    }

    default: {
      return state;
    }
  }
};

/**
 * SELECTORS
 */
const selectAllAsArray = (state) => {
  return Object.values(state.posts.entities);
};

const selectStatus = (state) => {
  return state.posts.status;
};

export const postsSelectors = {
  selectAllAsArray,
  selectStatus,
};
