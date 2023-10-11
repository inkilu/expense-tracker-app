export default function Dashboard({totalAmountToShow}) {
    console.log(totalAmountToShow);
  return (
    <div>
      <div id="popup2" class="overlay light">
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */}
        <a class="cancel" href="#"></a>
        <div class="popup">
          <h2>Enter Details</h2>
          <div class="content content2">
            <div class="exname">Expense Name:</div>
            <input type="text" class="expense-name" />
            <div class="exname">Date:</div>
            <input type="date" class="expense-name" />
            <div class="exname">Amount</div>
            <input type="number" class="expense-name" />
            <div class="button-add">
              <input type="button" class="add-btn" value="Add" />
            </div>
          </div>
        </div>
      </div>
      <main class="total-expense-dashboard">
        <div class="total-expense-heading-container">
          <div class="total-expense-heading">Total Expense</div>
        </div>
        <div class="total-money-display-container">
          <div class="total-money-display">${totalAmountToShow}</div>
        </div>
        <div class="add-new-button-container">
          <div class="add-new-button">
            <a href="#popup2">
              <input type="button" value="+ New Expense" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
