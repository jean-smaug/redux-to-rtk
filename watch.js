const { createAction } = require("@reduxjs/toolkit");

const fetchPostsSucced = createAction("posts/fetchPostsSucced");

console.log(fetchPostsSucced());
