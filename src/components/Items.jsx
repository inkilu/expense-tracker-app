import React from "react";
import Item from "./Item";

export default function Items({expense,handleDelete}) {
	return (
		<div>
			<div className="expense-items">
				{expense.map((element,index) => {
					return <Item key={index} exp={expense} itemDetails={element} index={index} handleDelete2={handleDelete}/>;
				})
			}
			</div>
		</div>
	);

}
