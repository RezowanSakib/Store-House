import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Update = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${productID}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const { suplier, img, description, _id, quantity } = product;

  return (
    <div>
      <Card className="h-100 shadow">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{suplier}</Card.Title>
          <h4>{quantity}</h4>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        <Button variant="secondary" size="md">
          Deliverd
        </Button>
      </Card>
    </div>
  );
};

export default Update;
