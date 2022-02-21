import React from "react";
import ModalPayment from "./ModalPayment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import config from "../config";

const stripePromise = loadStripe(config.stripePublicKey);

export default function StripeContainer({ show, setShow }) {
  return (
    <Elements stripe={stripePromise}>
      <ModalPayment show={show} setShow={setShow} />
    </Elements>
  );
}
