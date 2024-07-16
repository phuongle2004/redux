// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../reducer/expenseSlice';

export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});
