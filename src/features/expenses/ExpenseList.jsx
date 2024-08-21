import { useLocalStorageState } from "../../hooks/useLocalStorage";

function ExpenseList() {
  const [expenses] = useLocalStorageState([], "expenses");
  console.log(expenses);

  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.expenseType} - {expense.description} :{" "}
          <span>{expense.amount}</span>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
