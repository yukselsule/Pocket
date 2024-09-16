import { createSlice } from "@reduxjs/toolkit";

import { updateBalance } from "../balance/BalanceSlice";

const loadIncomesFromLocalStorage = function () {
    const savedIncomes = localStorage.getItem("incomes");

    return savedIncomes ? JSON.parse(savedIncomes) : [];
};

const initialState = {
    incomes: loadIncomesFromLocalStorage(),
};

const incomeSlice = createSlice({
    name: "incomes",
    initialState,
    reducers: {
        addIncome(state, action) {
            state.incomes.push(action.payload);
        },
        setIncomes(state, action) {
            state.incomes = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder.addCase(addIncome, (state, action) => {
            const incomeAmount = action.payload.amount;

            updateBalance(state.balance + incomeAmount);
        }),
});

export const { addIncome, setIncomes } = incomeSlice.actions;

export const selectIncomes = (state) => state.income.incomes;

export default incomeSlice.reducer;
