import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register vendor",
  initialState: {
    token:"",
  },
  reducers: {
     storeToken(state, action) {
        state.token = action.payload;
     }
  }
});

export default registerSlice;
