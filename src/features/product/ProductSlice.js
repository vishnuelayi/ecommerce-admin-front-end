import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "./ProductService";

const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getProducts = createAsyncThunk("product/get-products", async (thunkAPI) => {
  try {
    const response = await ProductService.getProducts();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      }),
});


export default productSlice.reducer;