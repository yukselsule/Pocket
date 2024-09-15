import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { selectExpenses } from "../expenses/ExpenseSlice";
import { selectIncomes } from "../income/IncomeSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

const getIconName = (expenseType) => {
    switch (expenseType) {
        case "Housing":
            return "home-outline";
        case "Shopping":
            return "cart-outline";
        case "Food & Drinks":
            return "fast-food-outline";
        case "Transportation":
            return "airplane-outline";
        case "Vehicle":
            return "car-outline";
        case "Life & Entertainment":
            return "happy-outline";
        case "Health":
            return "medkit-outline";
        case "Communication":
            return "call-outline";
        case "Invesments":
            return "cash-outline";
        default:
            return "accessibility-outline";
    }
};

function Summary() {
    const incomes = useSelector(selectIncomes);
    const expenses = useSelector(selectExpenses);
    const [expenseTypesAmounts, setExpenseTypeAmounts] = useState([]);
    const incomesTotal = incomes?.reduce((total, cur) => total + cur.amount, 0);
    const expensesTotal = expenses?.reduce(
        (total, cur) => total + cur.amount,
        0
    );

    useEffect(() => {
        const newExpenseTypeAmounts = [];

        expenses.forEach((expense) => {
            const { expenseType, amount } = expense;
            const existingExpenseType = newExpenseTypeAmounts.find(
                (item) => item.expenseType === expenseType
            );

            if (existingExpenseType) {
                existingExpenseType.expenseAmount += amount;
            } else {
                newExpenseTypeAmounts.push({
                    expenseType: expenseType,
                    expenseAmount: amount,
                });
            }
        });

        const sortedExpenseTypeAmounts = newExpenseTypeAmounts
            .filter((item) => item.expenseAmount > 0)
            .sort((a, b) => b.expenseAmount - a.expenseAmount);

        setExpenseTypeAmounts(sortedExpenseTypeAmounts);
    }, [expenses]);

    const pieData = {
        labels: expenseTypesAmounts.map(
            (item) =>
                `${item.expenseType}: ${(
                    (item.expenseAmount / expensesTotal) *
                    100
                ).toFixed(2)}%`
        ),
        datasets: [
            {
                label: "Expense Amount",
                data: expenseTypesAmounts.map((item) => item.expenseAmount),
                backgroundColor: [
                    "#f87171",
                    "#60a5fa",
                    "#fbbf24",
                    "#34d399",
                    "#a78bfa",
                    "#fb923c",
                    "#f472b6",
                    "#38bdf8",
                    "#facc15",
                    "#e879f9",
                ],
                borderColor: [
                    "#ef4444",
                    "#3b82f6",
                    "#f59e0b",
                    "#10b981",
                    "#8b5cf6",
                    "#f97316",
                    "#ec4899",
                    "#0ea5e9",
                    "#eab308",
                    "#d946ef",
                ],
                borderWidth: 1,
            },
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: "true",
                    position: "bottom",
                    labels: {
                        boxWidth: 10,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || "";
                            if (label) {
                                label += ": ";
                            }
                            if (context.parsed !== null) {
                                label += `${context.parsed}%`;
                            }
                            return label;
                        },
                    },
                },
            },
        },
    };

    if (!incomesTotal || !expensesTotal)
        return (
            <p className="px-8 text-center text-xl font-semibold text-stone-900">
                Start adding your income and expenses to manage your budget.
                Once you track them, reaching your financial goals will be much
                easier!
            </p>
        );

    return (
        <div className="flex flex-grow flex-col items-center bg-gradient-to-r from-rose-50 to-sky-50 py-4 text-sm text-stone-900 sm:my-4 sm:block sm:rounded-sm sm:px-12 sm:py-6">
            <div className="mb-4 sm:flex sm:justify-between">
                <p>
                    Your incomes:{" "}
                    <span className="text-2xl font-semibold text-sky-900">
                        {incomesTotal}
                    </span>
                </p>
                <p>
                    Your expenses:{" "}
                    <span className="text-2xl font-semibold text-rose-900">
                        {expensesTotal}
                    </span>
                </p>
            </div>

            <p>Your spend your money on:</p>

            <div className="mx-auto my-4 min-w-16 sm:max-w-sm">
                <Pie
                    data={pieData}
                    style={{ height: "350px", width: "350px" }}
                />
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 rounded-sm border-2 border-rose-700 px-4 py-2 text-stone-900 md:grid-cols-4">
                {expenseTypesAmounts.map((expense) => (
                    <div
                        key={expense.expenseType}
                        className="flex items-center gap-x-3 justify-self-center"
                    >
                        <ion-icon
                            name={getIconName(expense.expenseType)}
                            style={{
                                fontSize: "20px",
                                color: "#082f49",
                            }}
                        ></ion-icon>
                        <span className="font-semibold">
                            {expense.expenseAmount}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Summary;
