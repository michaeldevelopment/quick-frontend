import React from "react";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const CardHeaderRecipe = ({ text, bgStyle }) => {
  return (
    <Card.Header className="cardHeader">
      <Badge bg={bgStyle}>{text}</Badge>
    </Card.Header>
  );
};

export default CardHeaderRecipe;
