import { combineReducers } from "@reduxjs/toolkit";
import chatReducer from "./features/chatSlice";

export const rootReducer = combineReducers({
  chat: chatReducer,
});
