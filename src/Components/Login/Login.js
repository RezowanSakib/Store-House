import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Social from "../SocialLogin/Social";

const Login = () => {
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };
  return (
    <div className="container">
      <div className="row  ">
        <Form className="col-md-4 mx-auto mt-5 bg-light p-2 shadow-lg rounded">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <Row className="mb-3">
           <Social></Social>
          </Row>
        </Form>
        <p className="m-4">
          Already have an account?
          <Link to="/register" onClick={navigateRegister}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
