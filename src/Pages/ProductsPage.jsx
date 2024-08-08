import React from "react";
import NavigationBar from "../components/MainCom/NavBar";
import ProductList from "../components/Products/GetDelProducts";
import CreateProduct from "../components/Products/PostProducts";
// import "./AppStyles.css"; 

function Products(){
  return (
    <div className="product-page">
      <NavigationBar />
      <h1>Welcome to our the Products Page!</h1>
      <ProductList/>
      <CreateProduct />

    </div>
  )
}


export default Products;