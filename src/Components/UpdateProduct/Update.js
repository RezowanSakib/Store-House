import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const navigateToInventory = () => {
    navigate(`/ManageItem`);
  };
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://afternoon-springs-85105.herokuapp.com/product/${productID}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const { name, suplier, img, description, _id, quantity, price } = product;

  return (
    <div className="container">
      <div className="row mt-4 ">
        <div className="col-md-4 mx-auto">
          <div className="card-group">
            <div className="card">
              <img src={img} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">{suplier}</h5>
                <h5 className="card-title">$ {price}</h5>
                <h5 className="card-title">{quantity}</h5>
                <p className="card-text">{description}</p>
              </div>
              <div className="card-footer">
                <Button>Delivered</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mt-5 mx-auto">
          <h4>Restock this item</h4>
          <Form.Control type="number" placeholder="quantity" />
          <Button className="my-2">Restock</Button>
          <br />
          <Button onClick={navigateToInventory}>Manage Product</Button>
        </div>
      </div>
    </div>
  );
};

export default Update;
