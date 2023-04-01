import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingRejected,
} from './contactsFetchSlice';

axios.defaults.baseURL =
  'https://64285e2446fd35eb7c515ec6.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
