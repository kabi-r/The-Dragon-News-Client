import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Leftnav from "./Shared/LeftNav/Leftnav";
import Rightnav from "./Shared/RightNav/Rightnav";

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <Leftnav></Leftnav>
          </Col>
          <Col lg={6}>
            commming sonn
          </Col>
          <Col lg={3}>
            <Rightnav></Rightnav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
