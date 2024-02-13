import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductCatService from "./ProductCatService";

const initialState = {
  productCats: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getProCats = createAsyncThunk(
  "category/get-categories",
  async (thunkAPI) => {
    try {
      const response = await ProductCatService.getProCats();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addCategory = createAsyncThunk(
  "category/add-category",
  async (data, thunkAPI) => {
    try {
      const response = await ProductCatService.addCategory(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const productCatSlice = createSlice({
  name: "productCats",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getProCats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProCats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.productCats = action.payload;
      })
      .addCase(getProCats.rejected, (state, action) => {
        state.productCats = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(addCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createPro = action.payload;
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.createPro = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      }),
});

export default productCatSlice.reducer;
