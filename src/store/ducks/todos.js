import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../middleware/client";
import endpoint from "../../utils/endpoint";

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (state, { rejectWithValue, getState }) => {
    const { token } = getState().user;
    try {
      return await client(endpoint.todo, {
        body: state,
        headers: { "x-auth-token": token },
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const slice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {
    [createTodo.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
    },
    [createTodo.pending]: (state) => {
      state.isFetching = true;
    },
    [createTodo.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});

export default slice.reducer;
