import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Spinner";

import {
  BsFillCreditCard2BackFill,
  BsCalendar2DateFill,
  BsLockFill,
  BsShieldLockFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

import { useNavigate } from "react-router-dom";

import req from "../axiosReq/index";

import { useAuth } from "../Context/useAuth";
import { setUser } from "../Session/dataUser";

export default function ModalPayment({ show, setShow }) {
  const [showSpinner, setShowSpinner] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState({});
  const [handleInputs, setHandleInputs] = useState([]);
  const auth = useAuth();

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setHandleInputs({ ...handleInputs, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    setShowSpinner(true);
    e.preventDefault();

    const { cardNumber, CVC, expDate, docType, docNumber } = handleInputs;

    const dataPayment = {
      cardNumber: cardNumber,
      expYear: `20${expDate.split("/")[1]}`,
      expMonth: `${expDate.split("/")[0]}`,
      CVC: CVC,
      docType: docType,
      docNumber: docNumber,
      bill: "OR-1234",
      description: "Quick Suscription Payment",
      value: "9",
      tax: "1",
      taxBase: "8",
      currency: "USD",
      dues: "1",
      ip: "190.000.000.000",
    };

    req.makePaymentReq(dataPayment).then(({ data }) => {
      setShowSpinner(false);
      if (!data.error) {
        const { updatedUser } = data;
        setSuccess(updatedUser.premium.premiumStatus);
        auth.setPremiumUser(updatedUser.premium.premiumStatus);
        setUser(
          updatedUser.username,
          updatedUser.email,
          updatedUser.id,
          updatedUser.premium.premiumStatus
        );
      } else {
        setAlert({ show: true, error: data.message });
      }
    });
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} className="modalPayment">
        {alert.show && (
          <Alert
            variant="danger"
            onClose={() => {
              setAlert({ ...alert, show: false });
            }}
            dismissible
          >
            <h6>{alert.message}</h6>
          </Alert>
        )}
        {!success ? (
          <Form onSubmit={handleSubmit} className="paymentForm">
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
                          onChange={handleChange}
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
                              onChange={handleChange}
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
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <span className="text-muted certificate-text">
                        <i>
                          <BsShieldLockFill />
                        </i>
                        {"   "} Su transacción está asegurada con certificado
                        SSL
                      </span>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
              </Accordion>
              <FloatingLabel
                controlId="floatingSelect"
                label="Tipo de documento"
              >
                <Form.Select
                  aria-label="Tipo de documento"
                  onChange={handleChange}
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
                <Form.Control
                  type="number"
                  onChange={handleChange}
                  name="docNumber"
                />
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
        ) : (
          <Container className="paymentSuccess mx-auto text-center p-5">
            <h2>
              <BsFillCheckCircleFill className="text-success my-3" />
            </h2>
            <h3>¡Tu pago ha sido procesado satisfactoriamente!</h3>
            <p> Gracias por confiar en nosotros. </p>
            <Button variant="danger" onClick={() => navigate("/")} size="lg">
              Ir al Home
            </Button>
          </Container>
        )}
      </Modal>
    </>
  );
}
