import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useInputValue from "../../hooks/useInputValue";
import "./Login.css";
import auth from "../../firebase.init";

const Login = () => {
  const { email, handleEmail, password, handlePassword } = useInputValue();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (user) {
    console.log(user);
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="container w-25 shadow-lg py-5 rounded-3 mt-5">
      <Form onSubmit={handleLoginSubmit}>
        <h1 className="text-center">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmail}
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePassword}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button className="" variant="warning" size="lg" type="submit">
            Login
          </Button>
          <span className="text-center">
            New to Ema-john?{" "}
            <Link className="text-decoration-none text-warning" to="/signUp">
              Create New Account
            </Link>
          </span>
          <div className="d-flex justify-content-center">
            <hr />
            <strong>Or</strong>
            <hr />
          </div>
          <div className="text-center ">
            <Button variant="light border-2 border-dark text-center">
              Continue with Google
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
