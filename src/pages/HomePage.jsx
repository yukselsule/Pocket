import ExpenseForm from "../features/expenses/ExpenseForm";
import ExpenseList from "../features/expenses/ExpenseList";
import IncomeForm from "../features/income/IncomeForm";
import IncomeList from "../features/income/IncomeList";

function HomePage() {
    return (
        <div className="md:flex md:justify-between">
            <div className="rounded-md bg-sky-100 px-12 py-6">
                <h2 className="font-bold uppercase text-red-950">Incomes</h2>
                <IncomeForm />
                <IncomeList />
            </div>
            <div className="rounded-md bg-sky-100 px-12 py-6">
                <h2 className="font-bold uppercase text-red-950">Expenses</h2>
                <ExpenseForm />
                <ExpenseList />
            </div>
        </div>
    );
}

export default HomePage;
