export default function Dashboard({ totalAmountToShow }) {
  console.log(totalAmountToShow);
  return (
    <div>
      <div id="popup2" class="overlay light">
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */}
        <a className="cancel" href="#"></a>
        <div className="popup">
          <h2>Enter Details</h2>
          <div className="content content2">
            <div className="exname">Expense Name:</div>
            <input type="text" class="expense-name" />
            <div className="exname">Date:</div>
            <input type="date" class="expense-name" />
            <div className="exname">Amount</div>
            <input type="number" class="expense-name" />
            <div className="button-add">
              <input type="button" class="add-btn" value="Add" />
            </div>
          </div>
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
