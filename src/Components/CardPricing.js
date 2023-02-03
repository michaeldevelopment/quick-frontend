import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import { useSelector } from "react-redux";

import "./components.scss";

import ModalPayment from "./ModalPayment";
import useHandleModal from "../customHooks/useHandleModal";

const CardPricing = ({ text }) => {
  const userData = useSelector((state) => state.userData);

  const { handleRedirect, show, setShow } = useHandleModal(
    text,
    userData?.username
  );

  return (
    <>
      <Card style={{ width: "25rem" }} className="mx-auto my-3 cardPricing">
        <Card.Header>
          <h2>
            {text === "free" ? (
              Free
            ) : (
              <span className="text-danger"> Premium </span>
            )}
          </h2>
        </Card.Header>
        <Card.Body>
          <Card.Title className="py-3">
            {text === "free" ? (
              <h1 className="card-title pricing-card-title">
                <strong>$0</strong>
                <small className="text-muted">/ mo</small>
              </h1>
            ) : (
              <h1 className="card-title pricing-card-title">
                <strong>$8.99</strong>
                <small className="text-muted">/ mo</small>
              </h1>
            )}
          </Card.Title>

          <ul className="list-unstyled">
            <li className="border-bottom my-3">
              <BsCheckLg className="text-success" /> Ver recetas de otros
              Quickers
            </li>
            <li className="border-bottom my-3">
              <BsCheckLg className="text-success" /> Agregar recetas de otros
              Quickers a tu sección de Favoritos
            </li>
            {text === "free" ? (
              <li className="border-bottom my-3">
                <BsXLg className="text-danger" /> Crear tus propias recetas
              </li>
            ) : (
              <span>
                <li className="border-bottom my-3">
                  <BsCheckLg className="text-success" /> Agregar recetas de
                  otros Quickers Premium
                </li>
                <li className="border-bottom my-3">
                  <BsCheckLg className="text-success" /> Crear tus propias
                  recetas tipo Free o Premium
                </li>
              </span>
            )}
          </ul>
        </Card.Body>
        <Button
          variant={text === "free" ? "dark" : "danger"}
          size="lg"
          className="buttonPricing"
          onClick={handleRedirect}
        >
          {text === "free" ? "Registrarme gratis" : "Obtener membresía"}
        </Button>
      </Card>
      <ModalPayment show={show} setShow={setShow} />
    </>
  );
};

export default CardPricing;
