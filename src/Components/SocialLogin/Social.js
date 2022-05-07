import React from "react";
import { Button, Row } from "react-bootstrap";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };
  const [signInWithFacebook, fbuser, fbloading, fberror] =
    useSignInWithFacebook(auth);
  const handleFbLogin = (e) => {
    e.preventDefault();
    signInWithFacebook();
  };

  return (
    <div className="my-5 mx-2 p-2">
      <Row className="mb-3">
        <button
          className="p-2 rounded-pill bg-secondary text-light"
          onClick={handleGoogleLogin}
        >
          Login With Google
          <i className="fa-brands fa-google  mx-2"></i>
        </button>
      </Row>
      <Row>
        <Button
          className="p-2 rounded-pill bg-secondary text-light"
          onClick={handleFbLogin}
        >
          Login With Facebook
          <i className="fa-brands fa-google  mx-2"></i>
        </Button>
      </Row>
      <Row>
        <button className="p-2 rounded-pill bg-secondary text-light">
          Login With Github
          <i className="fa-brands fa-google  mx-2"></i>
        </button>
      </Row>
    </div>
  );
};

export default Social;
