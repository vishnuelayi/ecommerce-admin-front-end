import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import BlogCategoryService from "./BlogCatService";

const initialState = {
  blogcats: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getBlogCategories = createAsyncThunk(
  "blog/get-blogcategories",
  async (thunkAPI) => {
    try {
      const response = await BlogCategoryService.getBlogCategories();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addBlogCat = createAsyncThunk(
  "blog/add-blogcategory",
  async (data, thunkAPI) => {
    try {
      const response = await BlogCategoryService.addBlogCategory(data);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const resetState = createAction("Reset_all");

export const blogCatSlice = createSlice({
  name: "blogcats",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getBlogCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogcats = action.payload;
      })
      .addCase(getBlogCategories.rejected, (state, action) => {
        state.blogcats = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(addBlogCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBlogCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdBC = action.payload;
      })
      .addCase(addBlogCat.rejected, (state, action) => {
        state.createdBC = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(resetState, () => initialState),
});

export default blogCatSlice.reducer;
