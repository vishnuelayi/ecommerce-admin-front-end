import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

import BlogService from "./BlogService";

export const getBlogs = createAsyncThunk("blog/get-blogs", async (thunkAPI) => {
  try {
    const response = await BlogService.getBlogs();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addBlog = createAsyncThunk(
  "blog/add-blog",
  async (data, thunkAPI) => {
    try {
      const response = await BlogService.addBlog(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const resetState = createAction("reset-state");

const initialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.blogs = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(addBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdBlog = action.payload;
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.createdBlog = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(resetState, () => initialState),
});

export default blogSlice.reducer;
