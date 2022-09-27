import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useSelector } from "react-redux";
import useHandleModal from "../customHooks/useHandleModal";

import CardPricing from "../Components/CardPricing";
import CardPricingButton from "../Components/CardPricingButton";

import { useNavigate } from "react-router-dom";

export default function Plans() {
  const userData = useSelector((state) => state.userData);

  const navigate = useNavigate();

  const username = userData?.username;
  const premium = userData?.premium;

  const { handleOpenModal, show, setShow } = useHandleModal(username, premium);

  const handleFunctionRedirect = () => navigate("/login");

  return (
    <Container className="d-flex text-center justify-content-center">
      <Row>
        <Col lg={6}>
          {!Boolean(username) && (
            <CardPricing text="free" show={show} setShow={setShow}>
              <CardPricingButton
                variant="dark"
                onClickFunction={handleFunctionRedirect}
                buttonText="Registrarme gratis"
              />
            </CardPricing>
          )}
        </Col>
        <Col lg={6}>
          {!premium && (
            <CardPricing text="premium" show={show} setShow={setShow}>
              <CardPricingButton
                variant="danger"
                onClickFunction={handleOpenModal}
                buttonText="Obtener membresía"
              />
            </CardPricing>
          )}
        </Col>
      </Row>
    </Container>
  );
}
