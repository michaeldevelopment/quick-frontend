import React from "react";

import Button from "react-bootstrap/Button";

const CardPricingButton = ({ variant, onClickFunction, buttonText }) => {
  return (
    <Button
      variant={variant}
      size="lg"
      className="buttonPricing"
      onClick={onClickFunction}
    >
      {buttonText}
    </Button>
  );
};

export default CardPricingButton;
