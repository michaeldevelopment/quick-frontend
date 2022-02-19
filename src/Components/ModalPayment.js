import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; 
import req from "../axiosReq/index";

export default function ModalPayment({ show, setShow }) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = req.stripeReq({
          amount: 18,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <Modal show={show} onClick={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleSubmit}>
          Pagar membresía Quick PRO
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
