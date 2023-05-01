import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {userLogin} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location,'sjaff');
  const from = location.state?.from?.pathname || '/category/0'

  const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from,{replace:true})
    })
    .catch(error =>{console.log(error)})
}
  return (
    <Container className="w-25">
     <h2 className="text-primary text-center">Please Login</h2>
     <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Link to='../register' className="d-block mb-3">Create New Account</Link>
      <Button variant="primary" type="submit" className="w-full">
        Submit
      </Button>
    </Form>
    </Container>
    
    
  );
};

export default Login;
