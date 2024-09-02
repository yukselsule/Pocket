import { useSelector } from "react-redux";

import { selectExpenses } from "./ExpenseSlice";

function ExpenseList() {
    const expenses = useSelector(selectExpenses);

    return (
        <ul className="mt-4 overflow-hidden rounded-md border border-red-500 bg-stone-100">
            {expenses.length > 0 &&
                expenses
                    .slice()
                    .reverse()
                    .map((expense, index) => (
                        <li
                            key={index}
                            className={`${index % 2 === 0 ? "bg-stone-100" : "bg-stone-300"} px-3 py-1`}
                        >
                            {expense.expenseType} - {expense.description} :{" "}
                            <span>{expense.amount}</span>
                        </li>
                    ))}
        </ul>
    );
}

export default ExpenseList;
