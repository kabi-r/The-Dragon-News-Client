import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="w-25">
     <h2 className="text-primary text-center">Please Login</h2>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    
    
  );
};

export default Login;
