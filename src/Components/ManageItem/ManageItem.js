import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";

import Managing from "../ManagingProduct/Managing";

const ManageItem = () => {
  const { product, setProduct } = useProduct();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://afternoon-springs-85105.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = product.filter((product) => product._id !== id);
          setProduct(remaining);
        });
    }
  };
  const navigate = useNavigate();
  const navigateToAdd = () => {
    navigate(`/addproduct`);
  };
  return (
    <div>
      <h3>this is manage item</h3>
      <div className="container">
        <h1>All Products({product.length})</h1>
        <div className="row">
          {product.map((product) => (
            <Managing
              key={product._id}
              handleDelete={handleDelete}
              product={product}
            ></Managing>
          ))}
        </div>
      </div>
      <Button onClick={navigateToAdd}>Store Your Product</Button>
    </div>
  );
};

export default ManageItem;
