import React from "react";
import { Card } from "react-bootstrap";

const OurService = () => {
  return (
    <div className="row gy-4 mx-auto">
      <div className="col-md-4">
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>PACKAGING AND STORAGE</Card.Header>
          <Card.Body>
            
            <Card.Text>
             We can package and store product
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>CARGO</Card.Header>
          <Card.Body>
            
            <Card.Text>
              Let us transport your things from point A to Point B fast and securely
            </Card.Text>
          </Card.Body>
        </Card>
      
      </div><div className="col-md-4">
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>WAREHOUSING</Card.Header>
          <Card.Body>
            We have top notch security and loads of space.Store your stuff at our warehouse
            <Card.Text>
            
            </Card.Text>
          </Card.Body>
        </Card>
      </div><div className="col-md-4">
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>GROUND TRANSPORT</Card.Header>
          <Card.Body>
            
            <Card.Text>
            Transport your with our super moving vans
            </Card.Text>
          </Card.Body>
        </Card>
      </div><div className="col-md-4">
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>DOOR-TO-DOOR DELIVERY</Card.Header>
          <Card.Body>
            
            <Card.Text>
              Do you need something delivered?We are what you looking for!
            </Card.Text>
          </Card.Body>
        </Card>
      </div><div className="col-md-4">
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>WORLD WIDE TRANSPORT</Card.Header>
          <Card.Body>
           
            <Card.Text>
            We can transport your things anywhere in the world
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OurService;
