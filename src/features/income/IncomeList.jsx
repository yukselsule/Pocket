import { useSelector } from "react-redux";

import { selectIncomes } from "./IncomeSlice";

function IncomeList() {
    const incomes = useSelector(selectIncomes);

    return (
        <div className="max-w-68 mt-6 self-center overflow-hidden rounded-sm border border-sky-300 bg-stone-100 p-0 md:max-w-96">
            <ul className="thin-scrollbar max-h-60 max-w-80 overflow-y-scroll scroll-smooth">
                {incomes.length > 0 &&
                    incomes
                        ?.slice()
                        .reverse()
                        .map((income, index) => (
                            <li
                                key={index}
                                className={`${index % 2 === 0 ? "bg-stone-100" : "bg-stone-300"} flex justify-between gap-3 px-3 py-1`}
                            >
                                {income.description} :{" "}
                                <span>{income.amount}</span>
                            </li>
                        ))}
            </ul>
        </div>
    );
}

export default IncomeList;
