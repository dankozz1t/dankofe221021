import { createSlice } from "@reduxjs/toolkit";

import initUsersData from "db/initData.json";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: initUsersData,
  },
  reducers: {},
});
