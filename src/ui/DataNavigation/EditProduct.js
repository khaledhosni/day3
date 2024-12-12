import React from "react";
import { useLocation } from "react-router-dom";

const EditProduct = () => {
  let { state } = useLocation();

  return (
    <div>
      <h1>Edit Products</h1>
      <h3>{state.name}</h3>
      <h3>{state.price}</h3>
      <h3></h3>
    </div>
  );
};

export default EditProduct;
