import React from "react";
import { Carousel } from "react-bootstrap";
import banner2 from "../../kargo.jpg";
import banner1 from "../../logistic.png";
import banner3 from "../../room.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Learn Effectively</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Learn New technology</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3> Read More and More </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
