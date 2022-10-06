import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "./DropdownItem";
import DropdownItemWithFunction from "./DropdownItemWithFunction";

import Button from "react-bootstrap/Button";
import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function DropdownContainer({ userData, logOutFunction }) {
  return userData?.username ? (
    <>
      <Dropdown>
        <Dropdown.Toggle
          id="quick-dropdown"
          variant="danger"
          className="nav-dropdown border-0"
        >
          {userData?.username}{" "}
          {userData?.premium && <FaStar className="text-warning" />}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <DropdownItem
            route={`/myfavs/${userData?.id}`}
            text="Mis favoritos"
          />
          <DropdownItem
            route={`/myrecipes/${userData?.id}`}
            text="Mis recetas"
          />
          <Dropdown.Divider />
          <DropdownItemWithFunction
            onClickFunction={logOutFunction}
            identifier="logout"
          />
        </Dropdown.Menu>
      </Dropdown>

      <Button
        className="navbar-button mx-3"
        variant="danger"
        as={Link}
        to="/createrecipe"
        id="navbar-createrecipe-button"
      >
        Crear Receta
      </Button>
    </>
  ) : (
    <>
      <Button
        className="navbar-button mx-3"
        variant="danger"
        as={Link}
        to="/login"
        id="navbar-login-button"
      >
        Login
      </Button>

      <Button
        className="navbar-button mx-3"
        variant="danger"
        as={Link}
        to="/signup"
        id="navbar-signup-button"
      >
        Sign Up
      </Button>
    </>
  );
}
