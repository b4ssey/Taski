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

export const modifyTodo = createAsyncThunk(
  "todos/modifyTodo",
  async (id, state, { rejectWithValue, getState }) => {
    const { token } = getState().user;
    try {
      return await client(endpoint.todo + "/" + id, {
        body: state,
        headers: { "x-auth-token": token },
        method: "PUT",
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue, getState }) => {
    const { token, id } = getState().user;
    try {
      return await client(endpoint.todo + "/" + id, {
        headers: { "x-auth-token": token },
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodos",
  async (state, { rejectWithValue, getState }) => {
    const { token, id } = getState().user;
    try {
      return await client(endpoint.todo + "/" + id + "/" + state, {
        headers: { "x-auth-token": token },
        method: "DELETE",
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
    [createTodo.fulfilled]: (state) => {
      state.isFetching = false;
      state.isSuccess = true;
    },
    [createTodo.pending]: (state) => {
      state.isFetching = true;
      state.isError = false;
      state.isSuccess = false;
    },
    [createTodo.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.todos = payload;
    },
    [getTodos.pending]: (state) => {
      state.isFetching = true;
    },
    [getTodos.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [deleteTodo.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      let newPayload = state.todos.filter((e) => e._id !== payload._id);
      state.todos = newPayload;
    },
    [deleteTodo.pending]: (state) => {
      state.isFetching = true;
    },
    [deleteTodo.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [modifyTodo.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
    },
    [modifyTodo.pending]: (state) => {
      state.isFetching = true;
    },
    [modifyTodo.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
  },
});

export default slice.reducer;
