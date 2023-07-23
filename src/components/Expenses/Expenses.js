import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Cards";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState(2020);

  const onSelectExpenseFilterHandler = (selectedYear) => {
    console.log(selectedYear);
    setfilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectExpenseFilterHandler={onSelectExpenseFilterHandler}
      />
      {props.expense.filter((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
