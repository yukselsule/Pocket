import { useSelector } from "react-redux";

import { selectIncomes } from "./IncomeSlice";

function IncomeList() {
    const incomes = useSelector(selectIncomes);
   
    return (
        <ul className="mt-4 overflow-hidden rounded-md border border-red-500 bg-stone-100">
            {incomes.length > 0 &&
                incomes
                    ?.slice()
                    .reverse()
                    .map((income, index) => (
                        <li
                            key={index}
                            className={`${index % 2 === 0 ? "bg-stone-100" : "bg-stone-300"} px-3 py-1`}
                        >
                            {income.description} : <span>{income.amount}</span>
                        </li>
                    ))}
        </ul>
    );
}

export default IncomeList;
