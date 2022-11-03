import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <header className="App-header">
      <h1> Hello this is expenses items Application </h1>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
    </header>
  );
}

export default Expenses;
