import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const getUserFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: getUserFromLocalStorage,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/admin-login",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.login(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getOrders = createAsyncThunk(
  "orders/get-orders",
  async (thunkAPI) => {
    try {
      const response = await authService.getOrders();
      // console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = getUserFromLocalStorage;

        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.orders = action.payload;

        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.orders = [];

        state.message = "";
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
