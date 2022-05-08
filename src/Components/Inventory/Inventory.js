import React from "react";
import useProduct from "../../Hooks/useProduct";
import AllProducts from "../AllProducts/AllProducts";

const Inventory = () => {
  const { product } = useProduct();
  return (
    <div>
      <h2>This is inventory page</h2>
      <div className="container">
        <h1>All Products({product.length})</h1>
        <div className="row">
          {product.map((product) => (
            <AllProducts key={product._id} product={product}></AllProducts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
