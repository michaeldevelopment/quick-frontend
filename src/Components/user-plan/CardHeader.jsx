import React from "react";
import Card from "react-bootstrap/Card";

const CardHeader = ({ headerStyleText, headerText }) => {
  return (
    <Card.Header>
      <h2>
        <span className={headerStyleText}> {headerText} </span>
      </h2>
    </Card.Header>
  );
};

export default CardHeader;
