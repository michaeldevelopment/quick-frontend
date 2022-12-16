import "./pages.scss";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";

import { useSelector, useDispatch } from "react-redux";
import { userAuth, alertMessage } from "../Store/actions";

import useHandleChange from "../customHooks/useHandleChange";

export default function SignUp() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const { onChange, handleInputs } = useHandleChange();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName = " ",
      lastName = " ",
      email,
      username,
      password,
      validpassword,
    } = handleInputs;

    if (password === validpassword) {
      const newUser = {
        firstName,
        lastName,
        email,
        username,
        password,
      };

      dispatch(userAuth(newUser, "signUp"));
    } else {
      dispatch(
        alertMessage({
          value: true,
          message: "Las contraseñas no son iguales",
          variant: "danger",
        })
      );
    }
  };

  return (
    <Container>
      {alert.value && (
        <Alert
          variant={alert.variant}
          onClose={() => dispatch(alertMessage({ ...alert, value: false }))}
          dismissible
        >
          <p>{alert.message}</p>
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="user-form" noValidate>
        <Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Text>Ingresa tu nombre y apellido</InputGroup.Text>
            <Form.Control
              aria-label="First name"
              name="firstName"
              placeholder="Nombre"
              onChange={onChange}
              data-test-id="name-signup-form"
            />
            <Form.Control
              aria-label="Last name"
              name="lastName"
              placeholder="Apellido"
              onChange={onChange}
              data-test-id="lastname-signup-form"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingresa tu correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            onChange={onChange}
            data-test-id="email-signup-form"
          />
          <Form.Text className="text-muted">
            No compartiremos tu email con nadie más.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="inlineFormInputGroup">
            Ingresa tu nombre de usuario
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              name="username"
              onChange={onChange}
              data-test-id="username-signup-form"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={onChange}
            data-test-id="password-signup-form"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formValidPassword">
          <Form.Label>Ingresa nuevamente tu contraseña</Form.Label>
          <Form.Control
            type="password"
            name="validpassword"
            onChange={onChange}
            data-test-id="validpassword-signup-form"
          />
        </Form.Group>
        <Button variant="danger" type="submit" id="button-signup-form">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
