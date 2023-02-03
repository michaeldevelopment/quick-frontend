import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import imgHome from "../Images/img-home.png";

export default function HeroHome() {
  return (
    <Container className="firstSection p-5" fluid>
      <Row lg={8} className="text-center mx-auto">
        <Col lg={6} className="px-5 py-4">
          <h1 className="heroTitle">
            <strong>¡Tu recetario online!</strong>
          </h1>
          <p className="heroText">
            Quick App es el recetario de confianza de nuestros más de 100.000
            usuarios activos. Crea recetas y organiza tus días de cocina como
            mejor gustes.<strong> Anímate a ser Quicker</strong>
          </p>
          <a href="#about">
            <Button variant="danger" className="homeButton" size="lg">
              ¡Acerca de nosotros!
            </Button>
          </a>
        </Col>
        <Col lg={6}>
          <Image src={imgHome} alt="img-home" />
        </Col>
      </Row>
    </Container>
  );
}
