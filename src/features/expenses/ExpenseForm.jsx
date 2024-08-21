import { useState } from "react";
import { useDispatch } from "react-redux";

import { useLocalStorageState } from "../../hooks/useLocalStorage";

import { addExpense } from "./ExpenseSlice";
import { updateBalance } from "../balance/BalanceSlice";

function ExpenseForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [expenses, setExpenses] = useLocalStorageState([], "expenses");
  const dispatch = useDispatch();

  const expenseTypes = [
    "Housing",
    "Shopping",
    "Food & Drinks",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication",
    "Invesments",
    "Other",
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (description && amount && expenseType) {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        expenseType,
      };
      dispatch(addExpense(newExpense));
      dispatch(updateBalance(parseFloat(-amount)));

      setExpenses([...expenses, newExpense]);

      setDescription("");
      setAmount("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description</label>
        <input
          type="text"
          id="description"
          placeholder="Expense description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Expense amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Type</label>
        <select
          placeholder="Choose"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
          required
        >
          <option value="">Please choose an option</option>
          {expenseTypes.map((expenseType, index) => (
            <option key={index} value={expenseType}>
              {expenseType}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
