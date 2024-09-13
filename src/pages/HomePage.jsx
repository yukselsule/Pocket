import ExpenseForm from "../features/expenses/ExpenseForm";
import ExpenseList from "../features/expenses/ExpenseList";
import IncomeForm from "../features/income/IncomeForm";
import IncomeList from "../features/income/IncomeList";

function HomePage() {
    return (
        <div className="flex flex-col gap-8 px-4 py-4 lg:flex-row lg:justify-between">
            <div className="flex max-w-lg flex-col justify-between rounded-md bg-sky-100 px-4 py-2 sm:min-w-96 sm:px-12 sm:py-6">
                <div>
                    <h2 className="pb-4 font-bold uppercase text-sky-950">
                        Incomes
                    </h2>
                    <IncomeForm />
                </div>
                <IncomeList />
            </div>
            <div className="flex max-w-lg flex-col justify-between rounded-md bg-rose-100 px-4 py-2 sm:min-w-96 sm:px-12 sm:py-6">
                <div>
                    <h2 className="pb-4 font-bold uppercase text-rose-950">
                        Expenses
                    </h2>
                    <ExpenseForm />
                </div>

                <ExpenseList />
            </div>
        </div>
    );
}

export default HomePage;
