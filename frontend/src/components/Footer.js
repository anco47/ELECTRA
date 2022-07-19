import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center pt-5" style={{ fontWeight: "bold" }}>
            Made with
            <i
              className="fa fa-heart"
              aria-hidden="true"
              style={{
                padding: "0px 10px 0px 10px",
                color: "red",
              }}
            ></i>
            by Ankit Pal
          </Col>
        </Row>
        <Row>
          <Col className="text-center pb-5" style={{ fontWeight: "bold" }}>
            Copyright &copy; Electrify
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
