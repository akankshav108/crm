import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "register vendor",
  initialState: {
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    storeToken(state, action) {
      state.token = action.payload;
    },

    loginStatus(state) {},
  },
});

export const { storeToken } = authSlice.actions;

export default authSlice;
