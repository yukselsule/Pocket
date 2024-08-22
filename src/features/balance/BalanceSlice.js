import { createSlice } from "@reduxjs/toolkit";

const loadBalanceFromLocalStorage = function () {
  const savedBalance = localStorage.getItem("balance");

  return savedBalance ? parseFloat(savedBalance) : 0;
};

const initialState = {
  balance: loadBalanceFromLocalStorage(),
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    updateBalance(state, action) {
      state.balance += action.payload;
      localStorage.setItem("balance", state.balance);
    },
  },
});

export const { updateBalance } = balanceSlice.actions;

export const selectBalance = (state) => state.balance.balance;

export default balanceSlice.reducer;
