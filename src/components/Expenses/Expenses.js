import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.scss';

const Expenses = (props) => {
  const items = props.items;

  return (
    <Card className="expenses">
      {items.map((x) => (
        <ExpenseItem title={x.title} amount={x.amount} date={x.date} />
      ))}
    </Card>
  );
};

export default Expenses;
