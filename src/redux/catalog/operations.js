import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65fb194914650eb2100956d0.mockapi.io/adverts";

export const getCampers = createAsyncThunk(
  "catalog/getCampers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/advert");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCampersById = createAsyncThunk(
  "catalog/getCampersById",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`/advert/?_id=${credentials}`);
      return response.data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
