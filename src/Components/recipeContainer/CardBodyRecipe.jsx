import React from "react";

import Card from "react-bootstrap/Card";

const CardBodyRecipe = ({ title, category, foodHour }) => {
  return (
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <p className="text-muted"> Especial para: {foodHour} </p>
      <hr />
      <p className="text-muted">
        <strong> {category} </strong>
      </p>
    </Card.Body>
  );
};

export default CardBodyRecipe;
