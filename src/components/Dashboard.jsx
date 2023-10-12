import { useState } from "react";

export default function Dashboard({ totalAmountToShow, addExpData, expense}) {
  const [newData, setNewData] = useState([]);
  function onDataHandle(e) {
    let randomID = Math.random().toString(36).substring(2,7);
    const { name, value } = e.target;
    // console.log(expenseName, date, amount);
    setNewData({ ...newData,id:randomID,[name]:value});
    console.log(newData);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newData);
    // setNewData((prevState)=>{
    //   return [...prevState,{...newData,id:34343}];
    // })
    let upArray = expense.concat(newData);
   addExpData(upArray);
  };
  console.log(expense);
  return (
    <div>
      <div id="popup2" className="overlay light">
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */}
        <a className="cancel" href="#"></a>
        <div className="popup">
          <form name="main-form" onSubmit={handleSubmit}>
          <h2>Enter Details</h2>
          <div className="content content2">
          <input hidden class="expense-name" name="id" value={newData.expenseName}/>
            <div className="exname">Expense Name:</div>
            <input type="text" class="expense-name" name="expenseName" onChange={onDataHandle} />
            <div className="exname">Date:</div>
            <input type="date" name="date" class="expense-name" onChange={onDataHandle} />
            <div className="exname">Amount</div>
            <input type="number" class="expense-name" name="amount" onChange={onDataHandle} />
            <div className="button-add">
              <input type="submit" className="add-btn" value="Add"/>
            </div>
          </div>
          </form>
        </div>
      </div>
      <main className="total-expense-dashboard">
        <div className="total-expense-heading-container">
          <div className="total-expense-heading">Total Expense</div>
        </div>
        <div className="total-money-display-container">
          <div className="total-money-display">${totalAmountToShow}</div>
        </div>
        <div className="add-new-button-container">
          <div className="add-new-button">
            <a href="#popup2">
              <input type="button" value="+ New Expense" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
