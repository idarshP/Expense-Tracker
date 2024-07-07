import { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpenseChart";
// import expenses from "./App"
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import React from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
