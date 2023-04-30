import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <div className="text-center mt-3">
        <img src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favor</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex align-items-center">
        <Button variant="danger">Danger</Button>
        <Marquee speed={60}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
