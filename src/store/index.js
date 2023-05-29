import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./auth/auth-slice";

const store = configureStore({
    reducer: {auth: registerSlice.reducer}
})

export default store;