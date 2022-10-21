import { createSlice } from "@reduxjs/toolkit";

import initUsersData from "db/initData.json";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: initUsersData,
  },
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload;
    },
  },
});

export const { setFilter } = usersSlice.actions;
