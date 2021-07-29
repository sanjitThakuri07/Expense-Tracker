import React, { useState } from "react";

import ExpenseList from "./expenseList";
import Card from "./card";
import ExpensesFilter from "./expenseFilter";
import ExpensesChart from "./expenseChart";
import "./expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  //geting filtered data from expenseFilter.js
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // for filter
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpenses);

  //

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expenses;
