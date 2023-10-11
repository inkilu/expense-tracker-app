import React from "react";
import jsonData from "../sample_data/sample-data.json";
import Item from "./Item";

export default function Items() {
	return (
		<div>
			<div className="expense-items">
				{jsonData.map((element, index) => {
					return <Item key={index} itemDetails={element}></Item>;
				})}
			</div>
		</div>
	);
}
