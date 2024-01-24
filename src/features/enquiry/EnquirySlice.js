import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EnquiryService from "./EnquiryService";

const initialState = {
  enquiries: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getEnquiries = createAsyncThunk("enquiry/get-enquiries", async (thunkAPI) => {
  try {
    const response = await EnquiryService.getEnquiries();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const EnquirySlice = createSlice({
  name: "enquiries",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getEnquiries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquiries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.enquiries = action.payload;
      })
      .addCase(getEnquiries.rejected, (state, action) => {
        state.enquiries = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      }),
});


export default EnquirySlice.reducer;