import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useSelector } from "react-redux";
import useHandleModal from "../customHooks/useHandleModal";

import CardPricing from "../Components/user-plan/CardPricing";
import CardPricingButton from "../Components/user-plan/CardPricingButton";
import ModalPayment from "../Components/ModalPayment";

import { cardDetailsInfo } from "../Components/user-plan/CardDetailsInfo";

import { useNavigate } from "react-router-dom";

export default function Plans() {
  const userData = useSelector((state) => state.userData);

  const navigate = useNavigate();

  const username = userData?.username;
  const premium = userData?.premium;

  const { handleOpenModal, show, setShow } = useHandleModal(username, premium);
  const { freePlan, premiumPlan } = cardDetailsInfo;

  const handleFunctionRedirect = () => navigate("/login");

  return (
    <Container className="d-flex text-center justify-content-center">
      <Row>
        <Col lg={6}>
          {!Boolean(username) && (
            <CardPricing
              headerText="Free"
              headerStyleText=""
              price="$0"
              detailInfo={freePlan}
            >
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
            <CardPricing
              headerText="Premium"
              headerStyleText="danger"
              price="$8.99"
              detailInfo={premiumPlan}
            >
              <CardPricingButton
                variant="danger"
                onClickFunction={handleOpenModal}
                buttonText="Obtener membresía"
              />
            </CardPricing>
          )}
          <ModalPayment show={show} setShow={setShow} />
        </Col>
      </Row>
    </Container>
  );
}
