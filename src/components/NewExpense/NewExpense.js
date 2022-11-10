import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const NewExpense = () => {
  return (
    <div className="new-expense">
      {/* <h1> Hello this is me </h1> */}
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
