import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  activationToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setActivationToken(state, value) {
      state.activationToken = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setActivationToken } =
  authSlice.actions;

export default authSlice.reducer;
