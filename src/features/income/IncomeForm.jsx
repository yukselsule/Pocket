import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLocalStorageState } from "../../hooks/useLocalStorage";

import { addIncome, selectIncomes, setIncomes } from "./IncomeSlice";
import { updateBalance } from "../balance/BalanceSlice";

function IncomeForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [storedIncomes, setStoredIncomes] = useLocalStorageState([], "incomes");
  const dispatch = useDispatch();
  const incomes = useSelector(selectIncomes);

  useEffect(() => {
    dispatch(setIncomes(storedIncomes));
  }, [dispatch, storedIncomes]);

  function handleSubmit(e) {
    e.preventDefault();

    if (description && amount) {
      const newIncome = { description, amount: parseFloat(amount) };

      dispatch(addIncome(newIncome));
      dispatch(updateBalance(parseFloat(amount)));

      setStoredIncomes([...incomes, newIncome]);

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
          placeholder="Income description"
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
          placeholder="Income amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Income</button>
    </form>
  );
}

export default IncomeForm;
