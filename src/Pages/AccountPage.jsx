import React from "react";
import NavigationBar from "../components/MainCom/NavBar";
import CustomerAccountList from "../components/Accounts/GetDelAccounts";
import CreateCustomerAccount from "../components/Accounts/PostAccounts";
// import "./AppStyles.css"; 

function Accounts(){
  return (
    <div className="account-page">
      <NavigationBar />
      <h1>Welcome to our Accounts Page </h1>
      <CustomerAccountList/>
      <CreateCustomerAccount/>
    </div>
  )
}

export default Accounts;