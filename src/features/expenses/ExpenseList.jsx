import { useSelector } from "react-redux";

import { selectExpenses } from "./ExpenseSlice";

function ExpenseList() {
    const expenses = useSelector(selectExpenses) || [];

    if (expenses.length > 0)
        return (
            <div className="max-w-68 mt-6 w-full self-center overflow-hidden rounded-sm border border-rose-300 bg-stone-100 md:max-w-96">
                <ul className="thin-scrollbar max-h-60 overflow-y-scroll scroll-smooth">
                    {expenses.length > 0 &&
                        expenses
                            .slice()
                            .reverse()
                            .map((expense, index) => (
                                <li
                                    key={index}
                                    className={`${index % 2 === 0 ? "bg-stone-100" : "bg-stone-300"} flex justify-between gap-3 px-3 py-1`}
                                >
                                    <span className="text-wrap">
                                        {expense.expenseType} -{" "}
                                        {expense.description} :{" "}
                                    </span>

                                    <span>{expense.amount}</span>
                                </li>
                            ))}
                </ul>
            </div>
        );
}

export default ExpenseList;
