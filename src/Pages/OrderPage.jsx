import React from "react";
import NavigationBar from "../components/MainCom/NavBar";
import OrderList from "../components/Orders/GetDelOrders";
import CreateOrder from "../components/Orders/PostOrders";

function Orders(){
  return (
    <div className="order-page">
      <NavigationBar />
      <h1>Welcome to our Orders Page!</h1>
      <OrderList/>
      <CreateOrder/>
    </div>
  )
}

export default Orders;