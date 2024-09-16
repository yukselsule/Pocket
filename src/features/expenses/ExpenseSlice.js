import { createSlice } from "@reduxjs/toolkit";

import { updateBalance } from "../balance/BalanceSlice";

const loadExpensesFromLocalStorage = function () {
    const savedExpenses = localStorage.getItem("expenses");

    return savedExpenses ? JSON.parse(savedExpenses) : [];
};

const initialState = {
    expenses: loadExpensesFromLocalStorage(),
};

const expenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense(state, action) {
            state.expenses.push(action.payload);
        },
        setExpenses(state, action) {
            state.expenses = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder.addCase(addExpense, (state, action) => {
            const expenseAmount = action.payload.amount;

            updateBalance(state.balance - expenseAmount);
        }),
});

export const { addExpense, setExpenses } = expenseSlice.actions;

export const selectExpenses = (state) => state.expense.expenses;

export default expenseSlice.reducer;
