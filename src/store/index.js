import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./auth/register-slice";

const store = configureStore({
    reducer: {register: registerSlice.reducer}
})

export default store;