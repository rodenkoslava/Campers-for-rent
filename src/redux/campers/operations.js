import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://65fb194914650eb2100956d0.mockapi.io";

export const fetchCards = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/adverts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterCampers = createAsyncThunk(
  "campers/filter",
  async (filtersCriteria, thunkAPI) => {
    try {
      const response = await axios.get("/adverts", { params: filtersCriteria });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
