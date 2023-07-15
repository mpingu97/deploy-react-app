import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Cards";

function ExpenseItem(probs) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={probs.date} />
      <div className="expense-item__desciption">
        <h2> {probs.title} </h2>
        <div className="expense-item__price">€{probs.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
