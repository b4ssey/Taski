import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../middleware/client";
import endpoint from "../../utils/endpoint";

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (state, { getState }) => {
    const { response, data } = await client(
      `${endpoint.base_url + endpoint.login}`,
      { body: state }
    );
    return response;
  }
);

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (state, { getState }) => {
    const { response, data } = await client(
      `${endpoint.base_url + endpoint.register}`,
      { body: state }
    );
    return response;
  }
);

const slice = createSlice({
  name: "users",
  initialState: {
    username: "",
    email: "",
    token: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.username = payload.user.name;
      state.token = payload.user.token;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});
