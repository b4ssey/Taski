import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../middleware/client";
import endpoint from "../../utils/endpoint";

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (state, { rejectWithValue, getState }) => {
    try {
      return await client(endpoint.todo, {
        body: state,
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
  extraReducers: {},
});

export default slice.reducer;
