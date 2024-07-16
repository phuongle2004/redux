// src/features/expenses/expenseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalIncome: 0,
  totalExpense: 0,
}

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.items.push(action.payload);
      if (action.payload.type === 'thu') {
        state.totalIncome += action.payload.amount;
      } else {
        state.totalExpense += action.payload.amount;
      }
    },
    deleteExpense: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      const item = state.items[index];
      if (item.type === 'thu') {
        state.totalIncome -= item.amount;
      } else {
        state.totalExpense -= item.amount;
      }
      state.items.splice(index, 1);
    },
    updateExpense: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      const oldItem = state.items[index];
      if (oldItem.type === 'thu') {
        state.totalIncome -= oldItem.amount;
      } else {
        state.totalExpense -= oldItem.amount;
      }
      state.items[index] = action.payload;
      if (action.payload.type === 'thu') {
        state.totalIncome += action.payload.amount;
      } else {
        state.totalExpense += action.payload.amount;
      }
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
