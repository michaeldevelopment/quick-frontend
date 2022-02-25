import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Container, Form, Button } from "react-bootstrap";
import req from "../axiosReq/index";

export default function PasswordReset() {
  const [newPassword, setNewPassword] = useState();
  const [validNewPassword, setValidNewPassword] = useState();
  const [alert, setAlert] = useState();
  const [message, setMessage] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleValidNewPassword = (e) => {
    setValidNewPassword(e.target.value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (newPassword === validNewPassword) {
      const userChangePassword = {
        newPassword,
        id,
      };

      req.passwordResetReq(userChangePassword).then(({ data }) => {
        if (data.error) {
          setAlert(data.error);
          setMessage(data.message);
        } else {
          navigate(`/passwordchanged/${id}`);
        }
      });
    } else {
      setAlert(true);
      setMessage("Las contraseñas no coinciden");
    }
  };

  return (
    <Container className="my-5">
      {alert && (
        <Alert
          variant="danger"
          onClose={() => {
            setAlert(false);
          }}
          dismissible
        >
          <p>{message}</p>
        </Alert>
      )}
      <h1>Ingresa tu nueva contraseña</h1>
      <Form className="col-md-4" onSubmit={handleResetPassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="password"
            placeholder=""
            onChange={handleNewPassword}
            data-test-id="passwordreset1-form"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirma escribiendola nuevamente</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            onChange={handleValidNewPassword}
            data-test-id="passwordreset2-form"
          />
        </Form.Group>
        <Button variant="danger" type="submit" size="lg">
          Guardar
        </Button>
      </Form>
    </Container>
  );
}
