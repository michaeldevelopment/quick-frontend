import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <Container className="firstSection p-5" id="about" fluid>
      <Row className="text-center mx-auto">
        <Col>
          <h1>
            <strong>¡Úneta a la comunidad!</strong>
          </h1>
          <p>
            Quick App es el recetario de confianza de nuestros más de 100.000
            usuarios activos. Crea recetas y organiza tus días de cocina como
            mejor gustes.<strong> Anímate a ser Quicker</strong>
          </p>
          <Button
            variant="danger"
            className="homeButton"
            size="lg"
            as={Link}
            to="/plans"
          >
            ¡Ver planes!
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
