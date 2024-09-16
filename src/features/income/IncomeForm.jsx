import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLocalStorageState } from "../../hooks/useLocalStorage";

import { addIncome, selectIncomes, setIncomes } from "./IncomeSlice";
import { updateBalance } from "../balance/BalanceSlice";

function IncomeForm() {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [storedIncomes, setStoredIncomes] = useLocalStorageState(
        [],
        "incomes"
    );
    const dispatch = useDispatch();
    const incomes = useSelector(selectIncomes);

    useEffect(() => {
        dispatch(setIncomes(storedIncomes));
    }, [dispatch, storedIncomes]);

    function handleSubmit(e) {
        e.preventDefault();

        if (description && amount) {
            const newIncome = { description, amount: parseFloat(amount) };

            dispatch(addIncome(newIncome));
            setStoredIncomes([...incomes, newIncome]);

            dispatch(updateBalance(parseFloat(amount)));

            setDescription("");
            setAmount("");
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 [&>div]:flex [&>div]:justify-between [&>div]:gap-3"
            >
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Income description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="rounded-lg border border-stone-300 bg-stone-50 px-2 py-1 text-sm text-stone-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                </div>
                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        min="1"
                        id="amount"
                        placeholder="Income amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="rounded-lg border border-stone-300 bg-stone-50 px-2 py-1 text-sm text-stone-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                </div>
                <button
                    className="flex self-end rounded-lg border bg-stone-300 px-2 py-1 transition-all duration-500 hover:bg-sky-400"
                    type="submit"
                >
                    Add Income
                </button>
            </form>
        </>
    );
}

export default IncomeForm;
