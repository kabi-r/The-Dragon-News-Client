import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "./QZone";

const Rightnav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <div>
        <Button variant="outline-primary" className="mb-2">
          <FaGoogle></FaGoogle> Login with Google
        </Button>{" "}
        <Button variant="outline-secondary">
          <FaGithub></FaGithub> Login with Github
        </Button>{" "}
      </div>
      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter>Twitter </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone></QZone>
      </div>
    </div>
  );
};

export default Rightnav;
