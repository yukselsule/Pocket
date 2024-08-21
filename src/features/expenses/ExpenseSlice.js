import { createSlice } from "@reduxjs/toolkit";
import { updateBalance } from "../balance/BalanceSlice";

const initialState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense(state, action) {
      state.expenses.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder.addCase(addExpense, (state, action) => {
      const expenseAmount = action.payload.amount;

      updateBalance(state.balance - expenseAmount);
    }),
});

export const { addExpense } = expenseSlice.actions;

export const selectExpenses = (state) => state.expense.expenses;

export default expenseSlice.reducer;
