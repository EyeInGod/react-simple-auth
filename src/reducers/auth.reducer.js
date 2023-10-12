import { createSlice } from "@reduxjs/toolkit";

const currentToken = localStorage.getItem("authToken");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedin: currentToken !== undefined && currentToken !== null,
    token: JSON.parse(currentToken),
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isLoggedin = true;
      localStorage.setItem("authToken", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedin = false;
      state.token = undefined;
      localStorage.removeItem("authToken");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
