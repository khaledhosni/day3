import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  function handleProductsDetails() {
    navigate("/productdetails");
  }

  function handleEditProduct() {
    navigate("editproducts");
  }

  return (
    <div>
      <h1>All Products</h1>
      <button onClick={handleProductsDetails}>
        {" "}
        Go to Product Details - send id{" "}
      </button>{" "}
      <br></br>
      <button onClick={handleEditProduct}>
        Go to Edit Products -send Object
      </button>
    </div>
  );
};

export default Products;
