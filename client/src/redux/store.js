import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

export default combineReducers({
  auth: authSlice,
});
