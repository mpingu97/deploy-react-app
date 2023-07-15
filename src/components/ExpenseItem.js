import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(probs) {
  return (
    <div className="expense-item">
      <ExpenseDate date={probs.date} />
      <div className="expense-item__desciption">
        <h2> {probs.title} </h2>
        <div className="expense-item__price">€{probs.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
