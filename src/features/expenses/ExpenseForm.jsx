import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLocalStorageState } from "../../hooks/useLocalStorage";

import { addExpense, selectExpenses, setExpenses } from "./ExpenseSlice";
import { updateBalance } from "../balance/BalanceSlice";

const expenseTypes = [
    "Housing",
    "Shopping",
    "Food & Drinks",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Health",
    "Communication",
    "Invesments",
    "Other",
];

function ExpenseForm() {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [expenseType, setExpenseType] = useState("");
    const [storedExpenses, setStoredExpenses] = useLocalStorageState(
        [],
        "expenses"
    );
    const dispatch = useDispatch();
    const expenses = useSelector(selectExpenses);

    useEffect(() => {
        dispatch(setExpenses(storedExpenses));
    }, [dispatch, storedExpenses]);

    function handleSubmit(e) {
        e.preventDefault();

        if (description && amount && expenseType) {
            const newExpense = {
                description,
                amount: parseFloat(amount),
                expenseType,
            };
            dispatch(addExpense(newExpense));
            dispatch(updateBalance(parseFloat(-amount)));

            setStoredExpenses([...expenses, newExpense]);

            setDescription("");
            setAmount("");
            setExpenseType("");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 [&>div]:flex [&>div]:justify-between [&>div]:gap-3"
        >
            <div>
                <label>Description</label>
                <input
                    type="text"
                    id="description"
                    placeholder="Expense description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="rounded-lg border border-stone-300 bg-stone-50 px-2 py-1 text-sm text-stone-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
            </div>
            <div>
                <label>Amount</label>
                <input
                    type="number"
                    min="1"
                    id="amount"
                    placeholder="Expense amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="rounded-lg border border-stone-300 bg-stone-50 px-2 py-1 text-sm text-stone-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
            </div>
            <div>
                <label>Type</label>
                <select
                    value={expenseType}
                    onChange={(e) => setExpenseType(e.target.value)}
                    required
                    className="rounded-lg border border-stone-300 bg-stone-50 px-2 py-1 text-sm text-stone-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                    <option value="">Choose expense type</option>
                    {expenseTypes.map((expenseType, index) => (
                        <option key={index} value={expenseType}>
                            {expenseType}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className="flex self-end rounded-lg border bg-stone-300 px-2 py-1 transition-all duration-500 hover:bg-rose-400"
            >
                Add Expense
            </button>
        </form>
    );
}

export default ExpenseForm;
