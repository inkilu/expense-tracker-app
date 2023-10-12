import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Wave from "./components/Wave";
import Items from "./components/Items";
import Footer from "./components/Footer";
import jsonData from "./sample_data/sample-data_2.json";
import Sunrise from "./components/Sunrise";
function App() {
  const [expenseData,setExpenseData] = useState(jsonData);
  let totalAmount = 0;
  expenseData.forEach((item) => {
    const moneyValue = parseFloat(item.amount);
    totalAmount += moneyValue;
  });
  return (
    <div className="App">
      <Header />
      <Sunrise/>
      <Dashboard expense={expenseData} totalAmountToShow={totalAmount} addExpData={setExpenseData} />
      <Wave />
      <Items expense={expenseData} handleDelete={setExpenseData}/>
      <Footer />
    </div>
  );
}

export default App;
