import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ColorService from "./ColorService";

const initialState = {
  colors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getColors = createAsyncThunk("color/get-colors", async (thunkAPI) => {
  try {
    const response = await ColorService.getColors();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const ColorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getColors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getColors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.colors = action.payload;
      })
      .addCase(getColors.rejected, (state, action) => {
        state.colors = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      }),
});


export default ColorSlice.reducer;