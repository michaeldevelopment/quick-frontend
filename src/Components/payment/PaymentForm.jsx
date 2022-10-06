import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

import {
  BsFillCreditCard2BackFill,
  BsCalendar2DateFill,
  BsLockFill,
  BsShieldLockFill,
} from "react-icons/bs";

const PaymentForm = ({ onSubmit, onChange, showSpinner }) => {
  return (
    <Form onSubmit={onSubmit} className="paymentForm">
      <Modal.Header closeButton>
        <Modal.Title>
          <h5>Ingresa los datos de tu tarjeta </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="d-flex align-items-center justify-content-between">
                <span>Credit card</span>
                <div className="icons mx-2">
                  <img src="https://i.imgur.com/2ISgYja.png" width="30" />
                  <img src="https://i.imgur.com/W1vtnOV.png" width="30" />
                  <img src="https://i.imgur.com/35tC99g.png" width="30" />
                  <img src="https://i.imgur.com/2ISgYja.png" width="30" />
                </div>
              </div>
            </Accordion.Header>
            <AccordionBody className="creditCardInputs">
              <div className="card-body payment-card-body">
                <span className="font-weight-normal card-text">
                  Número de la tarjeta
                </span>
                <div className="input">
                  <i>
                    <BsFillCreditCard2BackFill />
                  </i>
                  <input
                    type="number"
                    name="cardNumber"
                    className="form-control"
                    placeholder="0000 0000 0000 0000"
                    onChange={onChange}
                  />
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-md-6">
                    <span className="font-weight-normal card-text">
                      Fecha de expiración
                    </span>
                    <div className="input">
                      <i>
                        <BsCalendar2DateFill />
                      </i>
                      <input
                        type="text"
                        name="expDate"
                        className="form-control"
                        placeholder="MM/YY"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <span className="font-weight-normal card-text">
                      CVC/CVV
                    </span>
                    <div className="input">
                      <i>
                        <BsLockFill />
                      </i>
                      <input
                        type="text"
                        name="CVC"
                        className="form-control"
                        placeholder="000"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <span className="text-muted certificate-text">
                  <i>
                    <BsShieldLockFill />
                  </i>
                  {"   "} Su transacción está asegurada con certificado SSL
                </span>
              </div>
            </AccordionBody>
          </Accordion.Item>
        </Accordion>
        <FloatingLabel controlId="floatingSelect" label="Tipo de documento">
          <Form.Select
            aria-label="Tipo de documento"
            onChange={onChange}
            name="docType"
            className="my-3"
          >
            <option value="opt">Selecciona una opción</option>
            <option value="CC">Cédula</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput1"
          label="Número de documento"
          className="text-muted my-3"
        >
          <Form.Control type="number" onChange={onChange} name="docNumber" />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          type="submit"
          className="mx-auto"
          disabled={showSpinner ? true : false}
        >
          Pagar membresía Quick PRO{" "}
          {showSpinner && (
            <Spinner
              animation="border"
              className="spinner-border-sm"
              variant="white"
            />
          )}
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default PaymentForm;
