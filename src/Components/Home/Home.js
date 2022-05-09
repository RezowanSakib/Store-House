import React from "react";

import banner2 from "../../kargo.jpg";
import banner1 from "../../logistic.png";
import banner3 from "../../room.jpg";
import useProduct from "../../Hooks/useProduct";
import AllProducts from "../AllProducts/AllProducts";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { product } = useProduct();
  const products = product.slice(0, 6);
  const navigate = useNavigate();
  const navigateToInventory = () => {
    navigate(`/inventory`);
  };
  const navigateToAdd = () => {
    navigate(`/addproduct`);
  };
  return (
    <div>
      <div className="container">
        <div className="row m-3 align-items-center bg-light">
          <div className="col-md-6 ">
            <h2>UNBEATABLE TRUCKING AND</h2>
            <h2>TRANSPORT SERVICE</h2>
            <Button onClick={navigateToAdd}>Store Your Product</Button>
          </div>
          <div className="col-md-6 ">
            <img src={banner1} className="img-fluid rounded" alt="" />
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <h1>All Products({product.length})</h1>
        <div className="row">
          {products.map((product) => (
            <AllProducts key={product._id} product={product}></AllProducts>
          ))}
        </div>
      </div>
      <Button onClick={navigateToInventory}>See All Product</Button>
    </div>
  );
};

export default Home;
