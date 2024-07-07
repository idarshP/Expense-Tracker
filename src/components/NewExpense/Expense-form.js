import React, { useState } from "react";
import "./Expense-form.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterdTitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnterdDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate:''
  // });
  // enteredTitle: event.target.value
  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
    // console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    // console.log();
    props.onSaveExpenseData(expenseData);
    setEnterdTitle('');
    setEnterdAmount('');
    setEnterdDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            placeholder="Enter Title..."
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="Number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit" onClick={props.onSubmit}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
