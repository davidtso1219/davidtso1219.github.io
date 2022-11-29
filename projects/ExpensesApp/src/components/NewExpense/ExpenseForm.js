import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const clearForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (title === '' || amount === 0 || date === '') {
      return null;
    }

    const newExpenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    clearForm();
    props.onAddNewExpense(newExpenseData);
    return newExpenseData;
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    props.onCancelAddNewExpense();
  };

  const titleChangeHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={amount}
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={date}
            onChange={dateChangeHandler}
            min='2019-01-01'
            max='2024-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={cancelHandler}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
