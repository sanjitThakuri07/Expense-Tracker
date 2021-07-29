// React => in executing or converting the below html like code into jsx and useState to detect changes
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./card";

// import css
import "./expenseItem.css";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 4, 30);
  //   const expenseTitle = "Car Insurance";
  //   const expensePrice = 294.67;
  //   const formatDate =
  // state should be directly used in that component
  // const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated");
  //   // console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs. {props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Name</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
