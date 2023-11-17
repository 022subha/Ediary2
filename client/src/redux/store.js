import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import courseSlice from "./slices/courseSlice";
import profileSlice from "./slices/profileSlice";

export default combineReducers({
  auth: authSlice,
  profile: profileSlice,
  course: courseSlice,
});
