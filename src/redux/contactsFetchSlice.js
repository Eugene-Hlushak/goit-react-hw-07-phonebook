import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
const initialState = {
  items: [],
  isLoad: false,
  error: null,
};

export const contactsFetchSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  items: [],
  isLoad: false,
  error: null,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoad = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoad = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoad = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingRejected } =
  contactsFetchSlice.actions;
export const contactsReducer = contactsFetchSlice.reducer;
