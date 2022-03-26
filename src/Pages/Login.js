import "./pages.scss";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { loginUser, alertMessage } from "../Store/actions";

export default function Login() {
  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [handleInputs, setHandleInputs] = useState([]);

  const handleChange = (e) => {
    setHandleInputs({ ...handleInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = handleInputs;

    const formLoginUser = {
      username,
      password,
    };

    dispatch(loginUser(formLoginUser));
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
          <Form.Label htmlFor="inlineFormInputGroup">
            Ingresa tu nombre de usuario
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <FormControl
              id="inlineFormInputGroup"
              name="username"
              onChange={handleChange}
              data-test-id="username-login-form"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
            data-test-id="password-login-form"
          />
        </Form.Group>

        <p
          onClick={() => navigate("/emailrecovery")}
          className="text-danger"
          role="button"
        >
          {" "}
          ¿Olvidaste tu contraseña?
        </p>

        <Button variant="danger" type="submit" id="button-login-form">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
