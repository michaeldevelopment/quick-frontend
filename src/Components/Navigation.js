import React from "react";
import quickLogo from "../Images/quick-menu-png.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

import { FaStar } from "react-icons/fa";
import "./components.scss";

export default function Navigation({ children }) {
  const auth = useAuth();
  const { user, logoutUser } = auth;
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
                <Nav.Link as={Link} to="/">
                  <li> Inicio </li>
                </Nav.Link>
                {user?.username && (
                  <Nav.Link as={Link} to="/allrecipes">
                    <li> Ver Recetas </li>
                  </Nav.Link>
                )}
                {!user?.premium && (
                  <Nav.Link as={Link} to="/plans">
                    <li> Planes </li>
                  </Nav.Link>
                )}
                {user?.username ? (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        variant="danger"
                        className="nav-dropdown border-0"
                      >
                        {user?.username}{" "}
                        {user?.premium && <FaStar className="text-warning" />}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={`/myfavs/${user?.id}`}>
                          My Favs
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to={`/myrecipes/${user?.id}`}>
                          My Recipes
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          onClick={() => logoutUser()}
                          id="logout-button"
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
                    >
                      Login
                    </Button>

                    <Button
                      className="navbar-button mx-3"
                      variant="danger"
                      as={Link}
                      to="/signup"
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
