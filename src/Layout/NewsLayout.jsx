import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Rightnav from "../Shared/RightNav/Rightnav";


const NewsLayout = () => {
    return (
      <>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
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

export default NewsLayout;