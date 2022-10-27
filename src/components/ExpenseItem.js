import React from "react";

import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date();
  let title = "Car Insurance";
  let price = 101.23;
  return (
    <div className="expense-item">
      <div> {expenseDate.toISOString()} </div>
      <div className="expense-item__description">
        <h2> {title} </h2>
      </div>
      <div className="expense-item__price">${price}</div>
    </div>
  );
}

export default ExpenseItem;
