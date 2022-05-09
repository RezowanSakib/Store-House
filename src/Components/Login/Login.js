import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Social from "../SocialLogin/Social";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };
  const resetPass = async () => {
    await sendPasswordResetEmail(email);
    toast("mailsent");
  };
  if (user) {
    navigate("/");
  }
  return (
    <div className="container">
      <ToastContainer></ToastContainer>
      <div className="row  ">
        <Form
          className="col-md-4 mx-auto mt-5 bg-light p-2 shadow-lg rounded"
          onSubmit={handleLogin}
        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <Row className="mb-3">
            <p className="text-danger">{error?.message}</p>
            <br />
            <p>
              Forgate password?
              <button className="btn-md bg-danger" onClick={resetPass}>
                ResetPass
              </button>
            </p>
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
