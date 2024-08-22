import { useSelector } from "react-redux";

import { selectIncomes } from "./IncomeSlice";

function IncomeList() {
  const incomes = useSelector(selectIncomes);

  return (
    <ul>
      {incomes
        .slice()
        .reverse()
        .map((income, index) => (
          <li key={index}>
            {income.description} : <span>{income.amount}</span>
          </li>
        ))}
    </ul>
  );
}

export default IncomeList;
