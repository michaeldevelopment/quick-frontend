import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { alertMessage } from "../../Store/actions";

import PaymentForm from "./PaymentForm";
import PaymentSuccess from "./PaymentSuccess";
import useHandlePayment from "../../customHooks/useHandlePayment";

export default function ModalPayment({ show, setShow }) {
  const alert = useSelector((state) => state.alert);
  const [handleInputs, setHandleInputs] = useState([]);
  const [success, setSuccess] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setHandleInputs({ ...handleInputs, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await useHandlePayment(handleInputs, setSuccess, setShowSpinner);
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} className="modalPayment">
        {alert.value && (
          <Alert
            variant={alert.variant}
            onClose={() => {
              dispatch(alertMessage({ ...alert, value: false }));
            }}
            dismissible
          >
            <h6>{alert.message}</h6>
          </Alert>
        )}
        {!success ? (
          <PaymentForm
            onSubmit={handleSubmit}
            onChange={handleChange}
            showSpinner={showSpinner}
          />
        ) : (
          <PaymentSuccess onClick={() => navigate("/")} />
        )}
      </Modal>
    </>
  );
}
