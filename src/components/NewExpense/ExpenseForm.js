import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enterDate, setEnteredDate] = useState("");
//   const [enterAmount, setEnteredAmount] = useState("");

const [userInput, setUserInput] = useState({
	enteredTitle:'',
	enteredAmount:'',
	enteredDate:'',
})

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
	setUserInput({
		...userInput,
		enteredTitle: event.target.value,
	})
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
	// console.log("date change")

	setUserInput({
		...userInput,
		enteredDate: event.target.value,
	})
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
	// console.log("amount")

	setUserInput({
		...userInput,
		enteredAmount: event.target.value,
	})
  };



  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
