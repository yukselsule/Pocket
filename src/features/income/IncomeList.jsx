import { useLocalStorageState } from "../../hooks/useLocalStorage";

function IncomeList() {
  const [incomes] = useLocalStorageState([], "incomes");

  return (
    <ul>
      {incomes.map((income, index) => (
        <li key={index}>
          {income.description} : <span>{income.amount}</span>
        </li>
      ))}
    </ul>
  );
}

export default IncomeList;
