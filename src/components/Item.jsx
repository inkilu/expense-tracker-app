import moment from "moment";
export default function Item({index,itemDetails,handleDelete2,exp}) {
let calculatedDate = moment(itemDetails.date ,).format("YYYY-MM-DD");
function onDeleteHandle(e){
let deleteID = e.target.getAttribute('deleteid');
const updatedItems = exp.filter(item => item.id !== deleteID);
handleDelete2(updatedItems);
}
  return (
    <div>
      <div className="expense-item">
        {/* {console.log("key is",index)} */}
        <div className="item-name-heading">
          <div className="item-name">{itemDetails.expenseName}</div>
          <div className="expense-amount">{itemDetails.amount}</div>
        </div>
        <div className="item-date-heading">
          <div className="category">{itemDetails.description}</div>
          <div className="item-date">{calculatedDate}</div>
        </div>
        <div className="delete-item-heading">
          <i className="fa-solid fa-trash-can" deleteid={itemDetails.id} onClick={onDeleteHandle}></i>
        </div>
      </div>
    </div>
  );
}
