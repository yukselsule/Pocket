import { useSelector } from "react-redux";

import { selectExpenses } from "./ExpenseSlice";

function ExpenseList() {
  const expenses = useSelector(selectExpenses);

  return (
    <ul>
      {expenses
        .slice()
        .reverse()
        .map((expense, index) => (
          <li key={index}>
            {expense.expenseType} - {expense.description} :{" "}
            <span>{expense.amount}</span>
          </li>
        ))}
    </ul>
  );
}

export default ExpenseList;
