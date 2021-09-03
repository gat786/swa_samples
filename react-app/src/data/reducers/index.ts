import { combineReducers } from "@reduxjs/toolkit";

import demoReducer from "./demo.reducer";
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
  demoReducer,
  authReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
