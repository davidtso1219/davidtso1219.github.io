import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

  const expenses = props.expenses;

  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No Expenses Found</h2>;
  }

  return (
    <ul className='expenses-list'>
      {
        expenses.map((item) =>
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        )
      }
    </ul>
  );
}

export default ExpensesList;