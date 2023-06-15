import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  //derived state concept
  // let filterdInfo = '2019, 2020 and 2021'
  // if (setFilteredYear === "2020") {
  //   filterdInfo = "2019, 2021 and 2022";
  // } else if (setFilteredYear === "2021") {
  //   filterdInfo = "2020, 2019 and 2022";
  // } else if (setFilteredYear === "2022") {
  //   filterdInfo = "2020, 2021 and 2023";
  // }
   const filterChangeHandler = (selectedYear) => {
    // console.log('im called from the child component')
     setFilteredYear(selectedYear);
   };
   
   //Filtering the expenses
   const filteredExpenses = props.items.filter((expense) => {
     return expense.date.getFullYear().toString() === filteredYear;
   });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
