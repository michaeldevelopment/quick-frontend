import React from "react";
import Card from "react-bootstrap/Card";

import CardHeader from "./CardHeader";
import CardTitlePrice from "./CardTitlePrice";
import CardBodyDetailPlan from "./CardBodyDetailPlan";

import "../components.scss";

const CardPricing = ({
  headerText,
  headerStyleText,
  price,
  detailInfo,
  children,
}) => {
  return (
    <>
      <Card style={{ width: "25rem" }} className="mx-auto my-3 cardPricing">
        <CardHeader headerStyleText={headerStyleText} headerText={headerText} />
        <Card.Body>
          <CardTitlePrice price={price} />
          <CardBodyDetailPlan detailInfo={detailInfo} />
        </Card.Body>
        {children}
      </Card>
    </>
  );
};

export default CardPricing;
