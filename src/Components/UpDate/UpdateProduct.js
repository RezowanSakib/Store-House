import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
const UpdateProduct = () => {
  const { register, handleSubmit } = useForm();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://afternoon-springs-85105.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const suplierName = event.target.name.value;
    const quantity = event.target.quantity.value;

    const updatedProduct = { suplierName, quantity };

    // send data to the server
    const url = `https://afternoon-springs-85105.herokuapp.com/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("users added successfully!!!");
        event.target.reset();
      });
  };

  return (
    <div>
      <h2>Updating User: {product.suplier}</h2>
      <form onSubmit={handleUpdateProduct}>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="number" name="quantity" placeholder="Quantity" required />
        <br />
        <input type="submit" value="Update Product" />
      </form>
    </div>
  );
};

export default UpdateProduct;
