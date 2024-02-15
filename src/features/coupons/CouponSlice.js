import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import CouponService from "./CouponService";

const initialState = {
  coupons: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getCoupons = createAsyncThunk(
  "coupon/get-coupons",
  async (thunkAPI) => {
    try {
      const response = await CouponService.getCoupons();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addCoupon = createAsyncThunk(
  "coupon/add-coupon",
  async (data, thunkAPI) => {
    try {
      const response = await CouponService.addCoupon(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const resetState = createAction("Reset_all")

export const CouponSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCoupons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoupons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.coupons = action.payload;
      })
      .addCase(getCoupons.rejected, (state, action) => {
        state.coupons = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(addCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdCoupon = action.payload;
      })
      .addCase(addCoupon.rejected, (state, action) => {
        state.createdCoupon = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      }).addCase(resetState, () => initialState)
});

export default CouponSlice.reducer;
