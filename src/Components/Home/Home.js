import React from "react";

import banner2 from "../../kargo.jpg";
import banner1 from "../../logistic.png";
import banner3 from "../../room.jpg";
import useProduct from "../../Hooks/useProduct";
import AllProducts from "../AllProducts/AllProducts";

const Home = () => {
  const { product } = useProduct();
  const products = product.slice(0, 6);
  return (
    <div>
      <h3>this is home page</h3>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <img src={banner3} className="img-fluid" alt="" />
              </div>
              <div className="col-6">
                <img src={banner2} className="img-fluid" alt="" />
              </div>

              <div className="col-6">
                <img src={banner1} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>All Products({product.length})</h1>
        <div>
          {products.map((product) => (
            <AllProducts key={product._id} product={product}></AllProducts>
          ))}
        </div>
      </div>
      <button>See all products</button>
    </div>
  );
};

export default Home;
