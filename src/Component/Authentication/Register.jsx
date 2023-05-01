import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaChessKing } from "react-icons/fa";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accept, setAccept] = useState(false)
  const handleRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;
    const ConfirmPassword = from.confirmPassword.value;
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAccept =event =>{
    setAccept(event.target.checked);

  }
  return (
    <Container className="w-25">
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name Here</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Photo URl"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
           type="checkbox" 
           label={<>Accept <Link to='/terms'>terms and condition</Link></>}
           onClick={handleAccept}
           name="checked"
           />
           
        </Form.Group>
        <Link to="../login" className="d-block mb-3">
          Already Account
        </Link>
        <Button variant="primary" type="submit" disabled={!accept} className="w-full">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
