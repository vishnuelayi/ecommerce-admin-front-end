import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UploadService from "./uploadService";

const initialState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const uploadImg = createAsyncThunk(
  "upload/upload-image",
  async (data, thunkAPI) => {
    try {
        const formData = new FormData();
        for(let i=0;i<data.length;i++)
        {
            formData.append("images", data[i])
        }
      const response = UploadService.uploadImage(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteImg = createAsyncThunk(
  "upload/delete-image",
  async (id, thunkAPI) => {
    try {
        
      const response = UploadService.deleteImage(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const uploadSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(uploadImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.images = action.payload;
      })
      .addCase(uploadImg.rejected, (state, action) => {
        state.images = [];
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteImg.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.images = [];
      })
      .addCase(deleteImg.rejected, (state, action) => {
        state.images = [];
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      
      })
;

export default uploadSlice.reducer;
