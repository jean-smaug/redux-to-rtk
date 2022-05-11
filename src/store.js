import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import * as postsSlice from "./modules/posts.slice";

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
