import { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const INITIAL_EXPENSES = [
  {id: 1, title: 'Car Insurance', amount: 295.67, date: new Date(2022, 7, 14)},
  {id: 2, title: 'Foods', amount: 180.23, date: new Date(2022, 6, 12)},
  {id: 3, title: 'Utilities', amount: 10.2, date: new Date(2022, 1, 1)},
];

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addNewExpenseHandler = (newExpense) => {

    if (newExpense === null) {
      return;
    }

    const id = expenses[expenses.length - 1].id + 1;
    newExpense.id = id;
    setExpenses(prevExpenses => [newExpense, ...prevExpenses]);
  }

  return (
    <div className="App">
      <NewExpense onAddNewExpense={addNewExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
