import { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const items = props.items;
  const [year, setYear] = useState('2022');

  const selectYear = (year) => {
    setYear(year);
  };

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear() === Number(year)
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={year} onSelectYear={selectYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
