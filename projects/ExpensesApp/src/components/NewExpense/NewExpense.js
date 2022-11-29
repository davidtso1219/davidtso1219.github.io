import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const [state, setState] = useState('init');

  const addNewExpenseHandler = newExpense => {
    props.onAddNewExpense(newExpense);
  };

  const cancelAddNewExpenseHandler = () => {
    setState('init');
  };;

  const showAddForm = () => {
    setState('add')
  };

  return (
    <div className="new-expense">
      {state === 'init' &&  <button onClick={showAddForm}>Add New Expense</button>}
      {state === 'add' &&
        <ExpenseForm onAddNewExpense={addNewExpenseHandler} onCancelAddNewExpense={cancelAddNewExpenseHandler}/>
      }
    </div>
  );
};

export default NewExpense;
