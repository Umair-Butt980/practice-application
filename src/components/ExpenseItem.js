import React from "react";

import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div> October 27th 2022 </div>
      <div className="expense-item__description">
        <h2> Insurance </h2>
      </div>
      <div className="expense-item__price">$202.12</div>
    </div>
  );
}

export default ExpenseItem;
