import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import profileSlice from "./slices/profileSlice";

export default combineReducers({
  auth: authSlice,
  profile: profileSlice,
});
