import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownItemWithFunction = ({ onClickFunction, identifier, text }) => {
  return (
    <Dropdown.Item
      onClick={onClickFunction}
      id={`dropdown-${identifier}-button`}
    >
      {text}
    </Dropdown.Item>
  );
};

export default DropdownItemWithFunction;
