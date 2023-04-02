import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    showContacts: {
      reducer: (state, { payload }) => {
        return payload;
      },
      // prepare(value) {
      //   return { payload: { value } };
      // },
    },
  },
});

export const { showContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
