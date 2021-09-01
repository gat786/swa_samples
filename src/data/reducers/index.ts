import { combineReducers } from "@reduxjs/toolkit";

import demoReducer from "./demo.reducer";

const rootReducer = combineReducers({
  demoReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
