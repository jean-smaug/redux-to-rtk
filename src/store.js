import { configureStore } from "@reduxjs/toolkit";

import * as postsSlice from "./modules/posts.slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});
