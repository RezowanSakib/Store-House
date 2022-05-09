import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

const Managing = ({ handleDelete, product }) => {
  const { name, suplier, img, description, _id, quantity, price } = product;

  return (
    <div className="col-md-4 ">
      <CardGroup>
        <Card className="h-100 shadow">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>Suplier {suplier}</Card.Title>
            <Card.Title>{suplier}</Card.Title>
            <h4>Quantity {quantity}</h4>
            <h4>$ {price}</h4>
            <Card.Text>{description}</Card.Text>
          </Card.Body>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              handleDelete(_id);
            }}
          >
            Delete
          </Button>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Managing;
