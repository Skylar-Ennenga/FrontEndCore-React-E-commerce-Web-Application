import React from "react";
import NavigationBar from "../components/MainCom/NavBar";
import CustomerList from "../components/Customer/GetDelCustomers";
import CreateCustomer from "../components/Customer/PostCustomer";
// import "./AppStyles.css"; 

function Customers(){
  return (
    <div className="customer-page">
      <NavigationBar />
      <h1>Welcome to our Customer Page </h1>
      <CustomerList/>
      <CreateCustomer/>
    </div>
  )
}

export default Customers;