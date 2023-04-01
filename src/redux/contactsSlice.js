import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '4591256' },
  { id: nanoid(), name: 'Hermione Kline', number: '4438912' },
  { id: nanoid(), name: 'Eden Clements', number: '6451779' },
  { id: nanoid(), name: 'Annie Copeland', number: '2279126' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactsInitialState,
    isLoad: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.items.push(payload.contact);
      },
      prepare(name, number, group) {
        return {
          payload: { contact: { id: nanoid(), name, number, group: group } },
        };
      },
    },

    deleteContact: {
      reducer: (state, { payload }) => {
        return (state = {
          ...state,
          items: [...state.items.filter(contact => contact.id !== payload.id)],
        });
      },
      prepare(contactId) {
        return { payload: { id: contactId } };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
