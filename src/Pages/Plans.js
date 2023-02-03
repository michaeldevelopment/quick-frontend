import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import CardPricing from "../Components/CardPricing";

export default function Plans() {
  return (
    <Container className="d-flex text-center justify-content-center">
      <Row>
        <Col lg={6}>
          <CardPricing text="free" />
        </Col>
        <Col lg={6}>
          <CardPricing text="pro" />
        </Col>
      </Row>
    </Container>
  );
}
