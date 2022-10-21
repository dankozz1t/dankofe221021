import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "redux/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },

  devTools: process.env.NODE_ENV === "development",
});
