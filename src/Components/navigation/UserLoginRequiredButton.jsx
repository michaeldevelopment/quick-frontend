import React from "react";

import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

export default function UserLoginRequiredButton({ userData, route, text }) {
  return userData?.username ? (
    <Nav.Link as={Link} to={`/${route}`} id={`navbar-${route}-button`}>
      <li> {text} </li>
    </Nav.Link>
  ) : null;
}
