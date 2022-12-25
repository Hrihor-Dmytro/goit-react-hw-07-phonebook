import { configureStore } from '@reduxjs/toolkit';
import { PhonebookReducer } from './phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: PhonebookReducer,
  },
});
