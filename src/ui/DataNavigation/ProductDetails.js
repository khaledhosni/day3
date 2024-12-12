import React from "react";

const ProductDetails = () => {
  let search = new URLSearchParams(window.location.search);
  let id = search.get("pid");
  return (
    <div>
      <h1>Product Details</h1>
      <h3>Product id is: {id}</h3>
    </div>
  );
};

export default ProductDetails;
