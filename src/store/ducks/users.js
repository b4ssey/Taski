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
      console.log(JSON.stringify(payload));
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});

export default slice.reducer;
