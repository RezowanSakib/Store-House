import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const AllProducts = ({ product }) => {
  const { suplier, img, description, _id, quantity } = product;
  const navigate = useNavigate();
  const navigateToEnroll = (_id) => {
    navigate(`/product/${_id}`);
  };
  return (
    <div className="col-md-4 ">
      <CardGroup>
        <Card className="h-100 shadow">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{suplier}</Card.Title>
            <h4>Quantity {quantity}</h4>
            <Card.Text>{description}</Card.Text>
          </Card.Body>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              navigateToEnroll(_id);
            }}
          >
            update
          </Button>
        </Card>
      </CardGroup>
    </div>
  );
};

export default AllProducts;
