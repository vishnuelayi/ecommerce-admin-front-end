import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import BrandService from "./BrandService";

const initialState = {
  brands: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getBrands = createAsyncThunk(
  "brand/get-brands",
  async (thunkAPI) => {
    try {
      const response = await BrandService.getBrands();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addBrand = createAsyncThunk(
  "brand/add-brand",
  async (data, thunkAPI) => {
    try {
      const response = await BrandService.addBrand(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.brands = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(addBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createBrand = action.payload;
      })
      .addCase(addBrand.rejected, (state, action) => {
        state.createBrand = [];
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      }),
});



export default brandSlice.reducer;
