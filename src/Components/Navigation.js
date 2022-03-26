import React from "react";
import quickLogo from "../Images/quick-menu-png.png";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Store/actions";
import { clearStorage } from "../Session/dataUser";

import { FaStar } from "react-icons/fa";
import "./components.scss";

export default function Navigation({ children }) {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const logOut = () => {
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
                {userData?.username && (
                  <Nav.Link
                    as={Link}
                    to="/allrecipes"
                    id="navbar-recipes-button"
                  >
                    <li> Ver Recetas </li>
                  </Nav.Link>
                )}
                {!userData?.premium && (
                  <Nav.Link as={Link} to="/plans" id="navbar-plans-button">
                    <li> Planes </li>
                  </Nav.Link>
                )}
                {userData?.username ? (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="quick-dropdown"
                        variant="danger"
                        className="nav-dropdown border-0"
                      >
                        {userData?.username}{" "}
                        {userData?.premium && (
                          <FaStar className="text-warning" />
                        )}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={Link}
                          to={`/myfavs/${userData?.id}`}
                          id="dropdown-myfavs-button"
                        >
                          Mis favoritos
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          to={`/myrecipes/${userData?.id}`}
                          id="dropdown-myrecipes-button"
                        >
                          Mis recetas
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          onClick={logOut}
                          id="dropdown-logout-button"
                        >
                          Cerrar Sesión
                        </Dropdown.Item>
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
                )}
              </Navbar.Collapse>
            </Container>
          </div>
        </Navbar>
      </div>
      {children}
    </>
  );
}
