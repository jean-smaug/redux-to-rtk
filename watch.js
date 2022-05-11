const { createAction } = require("@reduxjs/toolkit");

const action = createAction("module/action");

console.log(action.type);
