import moment from "moment";
export default function Item({ itemDetails }) {
let calculatedDate = moment(itemDetails.date , "DD-MM-YYYY").format("YYYY-MM-DD")
// let calculatedDate = moment(itemDetails.date, "YYYY/MM/DD");
// let calculatedDate = moment().format("YYYY/MM/DD")

console.log(itemDetails);
//console.log(moment("28/12/2023", "DD-MM-YYYY").format("DD-MM-YYYY"));

  return (
    <div>
      <div className="expense-item">
        <div className="item-name-heading">
          <div className="item-name">{itemDetails.expenseName}</div>
          <div className="expense-amount">{itemDetails.amount}</div>
        </div>
        <div className="item-date-heading">
          <div className="category">{itemDetails.description}</div>
          <div className="item-date">{calculatedDate}</div>
        </div>
        <div className="delete-item-heading">
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
}
