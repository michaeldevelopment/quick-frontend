import "./pages.scss";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import req from "../axiosReq/index";
import { useAuth } from "../Context/useAuth";
import { setUser, setToken } from "../Session/dataUser";

export default function Login() {
  const [handleInputs, setHandleInputs] = useState([]);
  const [alert, setAlert] = useState({});
  const auth = useAuth();

  const handleChange = (e) => {
    setHandleInputs({ ...handleInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = handleInputs;

    const loginUser = {
      username,
      password,
    };

    req.loginReq(loginUser).then(({ data }) => {
      if (data.error) {
        setAlert({
          value: data.error,
          message: data.message,
          variant: "danger",
        });
      } else {
        setAlert({
          value: true,
          message: "El usuario se ha logueado correctamente",
          variant: "success",
        });
        auth.loginUser(data.username, data.email, data.id, data.premium);
        setUser(data.username, data.email, data.id, data.premium);
        setToken(data.token);
      }
    });
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

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
