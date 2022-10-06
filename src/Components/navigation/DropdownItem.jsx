import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownItem = ({route, text}) => {
  return (
    <Dropdown.Item
      as={Link}
      to={route}
      id={`dropdown-${route.split("/")[1]}-button`}
    >
      {text}
    </Dropdown.Item>
  );
};

export default DropdownItem;
