import moment from "moment/moment";
export default function Item({ itemDetails }) {
  let calculatedDate = moment(itemDetails.date, "DD/MM/YYYY");
  return (
    <div>
      <div className="expense-item">
        <div className="item-name-heading">
          <div className="item-name">{itemDetails.expenseName}</div>
          <div className="expense-amount">{itemDetails.amount}</div>
        </div>
        <div className="item-date-heading">
          <div className="category">{itemDetails.description}</div>
          <div class="item-date">{calculatedDate.fromNow()}</div>
        </div>
        <div class="delete-item-heading">
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
}
