import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../middleware/client";
import endpoint from "../../utils/endpoint";

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (state, { rejectWithValue }) => {
    try {
      return await client(`${endpoint.login}`, {
        body: state,
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (state, { rejectWithValue }) => {
    try {
      return await client(`${endpoint.register}`, { body: state });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const slice = createSlice({
  name: "users",
  initialState: {
    username: "",
    email: "",
    token: "",
    id: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    userLoggedout: (state) => {
      state.token = "";
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.email;
      state.username = payload.name;
      state.token = payload.token;
      state.id = payload.id;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.successMessage = payload;
    },
    [registerUser.pending]: (state) => {
      state.isFetching = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});

const { userLoggedout } = slice.actions;

export default slice.reducer;

export const logoutUser = () => userLoggedout();
