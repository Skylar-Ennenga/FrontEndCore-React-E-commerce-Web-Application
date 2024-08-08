// ProductDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/MainCom/NavBar";


function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="product-details-page">
      <NavigationBar />
      <h1>Product Details for ID: {id}</h1>
      <p>Product Details content goes here...</p>
    </div>
  );
}

export default ProductDetails;