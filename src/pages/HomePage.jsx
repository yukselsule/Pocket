import Balance from "../features/balance/Balance";
import ExpenseForm from "../features/expenses/ExpenseForm";
import ExpenseList from "../features/expenses/ExpenseList";
import IncomeForm from "../features/income/IncomeForm";
import IncomeList from "../features/income/IncomeList";

function HomePage() {
  return (
    <div>
      <Balance />
      <div>
        <IncomeForm />
        <IncomeList />
      </div>
      <div>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </div>
  );
}

export default HomePage;
