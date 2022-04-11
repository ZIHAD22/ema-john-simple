import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import useInputValue from "../../hooks/useInputValue";
import auth from "../../firebase.init";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    email,
    handleEmail,
    setEmail,
    password,
    setPassword,
    handlePassword,
    name,
    setName,
    handleName,
  } = useInputValue();

  const [createUserWithEmailAndPassword, user, loading, CreateError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

  if (CreateError) {
    console.log(CreateError.message);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password).then(() => {
      updateProfile({ displayName: name });
      navigate(from, { replace: true });
    });

    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className="container w-25 shadow-lg py-5 rounded-3 mt-5">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center">Sign Up</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleName}
            value={name}
            type="text"
            placeholder="Enter Your Name"
          />
        </Form.Group>
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
            Sign Up
          </Button>
          <div className="d-flex justify-content-center align-items-center">
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

export default SignUp;
