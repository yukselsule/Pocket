import { configureStore } from "@reduxjs/toolkit";

import balanceReducer from "./features/balance/BalanceSlice";
import expenseReducer from "./features/expenses/ExpenseSlice";
import incomeReducer from "./features/income/IncomeSlice";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
    expense: expenseReducer,
    income: incomeReducer,
  },
});

export default store;
