import { createSlice } from "@reduxjs/toolkit";
import { updateBalance } from "../balance/BalanceSlice";

const initialState = {
  incomes: [],
};

const incomeSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    addIncome(state, action) {
      state.incomes.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder.addCase(addIncome, (state, action) => {
      const incomeAmount = action.payload.amount;

      updateBalance(state.balance + incomeAmount);
    }),
});

export const { addIncome } = incomeSlice.actions;

export const selectIncomes = (state) => state.income.incomes;

export default incomeSlice.reducer;
