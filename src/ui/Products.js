import React from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "./util/SideMenu";

const Products = () => {
  const navigate = useNavigate();

  function handleProductsDetails() {
    navigate("/productdetails?pid=105");
  }

  let product = {
    name: "Galaxy ultra s24",
    price: 65000,
    id: 1005,
  };

  let catalog = {};

  function handleEditProduct() {
    navigate("/editproducts", { state: product });
  }

  return (
    <div>
      <SideMenu />
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
