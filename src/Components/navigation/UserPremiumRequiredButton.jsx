import React from "react";

import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

export default function UserPremiumRequiredButton({ userData, route, text }) {

  return (
    !userData?.premium && (
      <Nav.Link as={Link} to={`/${route}`} id={`navbar-${route}-button`}>
        <li> {text} </li>
      </Nav.Link>
    )
  );
}
