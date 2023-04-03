import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  getContactInfo,
} from './operations';

const initialState = {
  items: [],
  contact: null,
  isLoad: false,
  error: null,
};

const pendingState = state => {
  state.isLoad = true;
};

const errorState = (state, { payload }) => {
  state.isLoad = false;
  state.error = payload;
};

export const contactsFetchSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending]: pendingState,

    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoad = false;
      state.contact = null;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: errorState,

    [addContact.pending]: pendingState,
    [addContact.fulfilled](state, { payload }) {
      state.isLoad = false;
      state.error = null;
      state.contact = null;
      state.items = [...state.items, payload];
    },
    [addContact.rejected]: errorState,

    [getContactInfo.pending]: pendingState,
    [getContactInfo.fulfilled](state, { payload }) {
      state.isLoad = false;
      state.error = null;
      state.contact = payload;
    },
    [getContactInfo.rejected]: errorState,

    [deleteContact.pending]: pendingState,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoad = false;
      state.error = null;
      state.items = [...state.items.filter(item => item.id !== payload.id)];
    },
    [deleteContact.rejected]: errorState,
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingRejected } =
  contactsFetchSlice.actions;
export const contactsReducer = contactsFetchSlice.reducer;
