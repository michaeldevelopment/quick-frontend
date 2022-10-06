import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Spinner";

import { BsFillCheckCircleFill } from "react-icons/bs";

const PaymentSuccess = ({ onClick }) => {
  return (
    <Container className="paymentSuccess mx-auto text-center p-5">
      <h2>
        <BsFillCheckCircleFill className="text-success my-3" />
      </h2>
      <h3>¡Tu pago ha sido procesado satisfactoriamente!</h3>
      <p> Gracias por confiar en nosotros. </p>
      <Button variant="danger" onClick={onClick} size="lg">
        Ir al Home
      </Button>
    </Container>
  );
};

export default PaymentSuccess;
