import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number;
  name: string;
};

type UserState = {
  name: string;
  token: string | null;
  users: User[];
  loading: boolean;
  error: string;
};

const storedUser = localStorage.getItem("user");

const initialState: UserState = storedUser
  ? JSON.parse(storedUser)
  : {
      name: "",
      token: null,
      users: [],
      loading: false,
      error: "",
    };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    login: (
      state,
      action: PayloadAction<{ name: string; token: string }>
    ) => {
      state.name = action.payload.name;
      state.token = action.payload.token;

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...state,
          name: action.payload.name,
          token: action.payload.token,
        })
      );
    },

    logout: (state) => {
      state.name = "";
      state.token = null;

      localStorage.removeItem("user");
    },
  },
});

export const { setUser, login, logout } = userSlice.actions;
export default userSlice.reducer;