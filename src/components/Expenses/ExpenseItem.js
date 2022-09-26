import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  //use here, not inside nested function

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick= {clickHandler} >Change title</button>
    </Card>
  );
}

export default ExpenseItem;
