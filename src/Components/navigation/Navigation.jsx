import React from "react";
import quickLogo from "../../Images/quick-menu-png.png";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Store/actions";
import { clearStorage } from "../../Session/dataUser";

import "../components.scss";

import UserLoginRequiredButton from "./UserLoginRequiredButton";
import UserPremiumRequiredButton from "./UserPremiumRequiredButton";
import DropdownContainer from "./DropdownContainer";

import { Link } from "react-router-dom";

export default function Navigation({ children }) {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const logOutFunction = () => {
    dispatch(logoutUser());
    clearStorage();
  };

  return (
    <>
      <div className="divNavBackgr">
        <Navbar collapseOnSelect className="mx-5" expand="lg">
          <div className="navbar mx-auto navbarBackgr px-5">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <Image src={quickLogo} alt="quick-logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link as={Link} to="/" id="navbar-home-button">
                  <li> Inicio </li>
                </Nav.Link>
                <UserLoginRequiredButton
                  userData={userData}
                  route="allrecipes"
                  text="Ver Recetas"
                />
                <UserPremiumRequiredButton
                  userData={userData}
                  route="plans"
                  text="Planes"
                />
                <DropdownContainer
                  userData={userData}
                  logOutFunction={logOutFunction}
                />
              </Navbar.Collapse>
            </Container>
          </div>
        </Navbar>
      </div>
      {children}
    </>
  );
}
