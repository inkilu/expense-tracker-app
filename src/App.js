import React from "react";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Wave from "./components/Wave";
import Items from "./components/Items";
import Footer from "./components/Footer";
import jsonData from "./sample_data/sample-data.json"
function App() {
  let totalAmount = 0;
	jsonData.forEach((item) => {
		const moneyValue = parseFloat(item.amount.replace("$", ""));
		totalAmount += moneyValue;
	});
	console.log(totalAmount);
  return (
    <div className="App">
      <Header />
      <Dashboard totalAmountToShow={totalAmount}/>
      <Wave />
      <Items />
      <Footer />
    </div>
  );
}

export default App;
