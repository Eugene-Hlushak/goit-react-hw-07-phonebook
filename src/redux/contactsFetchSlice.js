import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
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
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoad = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoad = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoad = true;
    },
    [addContact.fullfield](state, { payload }) {
      state.isLoad = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContact.rejected](state, { payload }) {
      state.isLoad = false;
      state.error = payload;
    },
    [deleteContact.pending](state) {
      state.isLoad = true;
    },
    [deleteContact.fullfield](state, { payload }) {
      state.isLoad = false;
      state.error = null;
      state.items.push(payload);
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoad = false;
      state.error = payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingRejected } =
  contactsFetchSlice.actions;
export const contactsReducer = contactsFetchSlice.reducer;
