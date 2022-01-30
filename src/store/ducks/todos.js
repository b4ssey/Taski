import { createSlice } from "@reduxjs/toolkit";

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
