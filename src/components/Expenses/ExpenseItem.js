import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.scss';

const ExpenseItem = (props) => {
  // This is how State is managed
  // useState always returns two properties,
  // a value & a function to set/update the value
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('UPDATED TEXT!');
    console.log('Clicked bro');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
