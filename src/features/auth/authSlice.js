import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { toast } from "react-toastify";

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

export const getSingleOrder = createAsyncThunk(
  "orders/get-order",
  async (id, thunkAPI) => {
    try {
      const response = await authService.getSingleOrder(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getMonthlyIncome = createAsyncThunk(
  "orders/monthlyIncome",
  async (thunkAPI) => {
    try {
      const response = await authService.getMonthlyIncome();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getYearlyIncome = createAsyncThunk(
  "orders/yearlyIncome",
  async (thunkAPI) => {
    try {
      const response = await authService.getYearlyIncome();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  "orders/updatestatus",
  async (data, thunkAPI) => {
    try {
      const response = await authService.updateOrderStatus(data);
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
      })
      .addCase(getMonthlyIncome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMonthlyIncome.fulfilled, (state, action) => {
        state.monthlyItem = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getMonthlyIncome.rejected, (state, action) => {
        state.monthlyItem = [];

        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(getYearlyIncome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getYearlyIncome.fulfilled, (state, action) => {
        state.yearlyItem = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getYearlyIncome.rejected, (state, action) => {
        state.yearlyItem = [];

        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.updatedOrder = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        if (state.isSuccess) {
          toast.success("Status Updated");
        }
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.updatedOrder = [];

        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
        if (state.isError) {
          toast.error("Something went wrong");
        }
      })
      .addCase(getSingleOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleOrder.fulfilled, (state, action) => {
        state.singleOrder = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getSingleOrder.rejected, (state, action) => {
        state.singleOrder = [];
        state.message = action.payload.message;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
