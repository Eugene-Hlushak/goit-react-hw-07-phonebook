import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsFetchSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
