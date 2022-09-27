import React from "react";

import { BsCheckLg, BsXLg } from "react-icons/bs";

const CardBodyDetailPlan = ({ detailInfo }) => {
  return (
    <ul className="list-unstyled">
      {detailInfo.map(({ text, isIncluded }, index) => {
        return (
          <li className="border-bottom my-3" key={index}>
            {isIncluded ? (
              <BsCheckLg className="text-success" />
            ) : (
              <BsXLg className="text-danger" />
            )}{" "}
            {text}
          </li>
        );
      })}
    </ul>
  );
};

export default CardBodyDetailPlan;
