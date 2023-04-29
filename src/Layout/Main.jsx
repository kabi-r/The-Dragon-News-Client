import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Leftnav from "../Shared/LeftNav/Leftnav";
import Rightnav from "../Shared/RightNav/Rightnav";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <Leftnav></Leftnav>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <Rightnav></Rightnav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Main;
