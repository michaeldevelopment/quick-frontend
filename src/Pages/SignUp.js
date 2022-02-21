import "./pages.scss";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";
import req from "../axiosReq/index";
import { useAuth } from "../Context/useAuth";
import { setUser, setToken } from "../Session/dataUser";

export default function SignUp() {
  const [handleInputs, setHandleInputs] = useState([]);
  const [alert, setAlert] = useState({});
  const auth = useAuth();

  const handleChange = (e) => {
    setHandleInputs({ ...handleInputs, [e.target.name]: e.target.value });
  };

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
      req.signUpReq(newUser).then(({ data }) => {
        if (data.error) {
          setAlert({
            value: data.error,
            message: data.message,
            variant: "danger",
          });
        } else {
          setAlert({
            value: true,
            message: "El usuario se ha creado",
            variant: "success",
          });
          auth.loginUser(data.username, data.email, data.id, data.premium);
          setUser(data.username, data.email, data.id, data.premium);
          setToken(data.token);
        }
      });
    } else {
      setAlert({
        value: true,
        message: "Las contraseñas no son iguales",
        variant: "danger",
      });
    }
  };

  return (
    <Container>
      {alert.value && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ ...alert, value: false })}
          dismissible
        >
          <p>{alert.message}</p>
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="user-form" noValidate>
        <Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Text>Ingresa tu nombre y apellido</InputGroup.Text>
            <FormControl
              aria-label="First name"
              name="firstName"
              placeholder="Nombre"
              onChange={handleChange}
            />
            <FormControl
              aria-label="Last name"
              name="lastName"
              placeholder="Apellido"
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingresa tu correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
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
            <FormControl
              id="inlineFormInputGroup"
              name="username"
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ingresa nuevamente tu contraseña</Form.Label>
          <Form.Control
            type="password"
            name="validpassword"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
