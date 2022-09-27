import React from "react";
import Card from "react-bootstrap/Card";

const CardBodyPrice = ({ price }) => {
  return (
    <Card.Title className="py-3">
      <h1 className="card-title pricing-card-title">
        <strong>{price}</strong>
        <small className="text-muted">/ mo</small>
      </h1>
    </Card.Title>
  );
};

export default CardBodyPrice;
