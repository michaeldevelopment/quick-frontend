import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import quick1 from "../Images/quick1.png";
import quick2 from "../Images/quick2.png";
import quick3 from "../Images/quick3.png";

export default function WhyQuick() {
  return (
    <Container className="secondSection p-5" fluid>
      <Row lg={8} className="text-center mx-auto">
        <h2>
          <strong>¿Porqué Quick App?</strong>
        </h2>
        <hr className="text-danger my-3" />
        <Col lg={4} className="px-5 py-4">
          <Image src={quick1} alt="img-home" className="mb-3" />
          <h4>
            <strong>¡Encuentras de todo!</strong>
          </h4>
          <p>
            Encuentra recetas de alta calidad, con ingredientes que se ajusten a
            tus intereses
          </p>
        </Col>
        <Col lg={4} className="px-5 py-4">
          <Image src={quick2} alt="img-home" className="mb-3" />
          <h4>
            <strong>Planea tus comidas</strong>
          </h4>
          <p>
            Ya no tienes que buscar por horas para encontrar recetas que sean de
            tu interés. Encuentra, organiza y planifica de manera fácil y rápida
          </p>
        </Col>
        <Col lg={4} className="px-5 py-4">
          <Image src={quick3} alt="img-home" className="mb-3" />
          <h4>
            <strong>Trabajamos las 24 horas</strong>
          </h4>
          <p>
            Soporte 24/7 y una gran oferta de restaurantes y aliados con
            servicio las 24 horas.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
