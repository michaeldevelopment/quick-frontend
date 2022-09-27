import React from "react";
import Card from "react-bootstrap/Card";
import { BsCheckLg, BsXLg } from "react-icons/bs";

import "./components.scss";

import ModalPayment from "./ModalPayment";

const CardPricing = ({ text, show, setShow, children }) => {
  return (
    <>
      <Card style={{ width: "25rem" }} className="mx-auto my-3 cardPricing">
        <Card.Header>
          <h2>
            {text === "free" ? (
              "Free"
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
        {children}
      </Card>
      <ModalPayment show={show} setShow={setShow} />
    </>
  );
};

export default CardPricing;
