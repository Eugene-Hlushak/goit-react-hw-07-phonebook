import { createSlice } from '@reduxjs/toolkit';
import { filterByGroup } from './constants';

const groupFilterInitialState = filterByGroup.all;

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterName: '',
    filterGroup: groupFilterInitialState,
  },
  reducers: {
    showContactsByName: {
      reducer: (state, { payload }) => {
        return { ...state, filterName: payload };
      },
    },
    setStatusFilter: {
      reducer: (state, { payload }) => {
        console.log(payload);
        return { ...state, filterGroup: payload };
      },
    },
  },
});

export const { showContactsByName, setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
