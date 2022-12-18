import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Container, Form, Button } from "react-bootstrap";
import req from "../axiosReq/index";
import useHandleChange from "../customHooks/useHandleChange";

export default function PasswordReset() {
  const [alert, setAlert] = useState();
  const [message, setMessage] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const { onChange, handleInputs } = useHandleChange();

  const handleResetPassword = (e) => {
    e.preventDefault();

    const { newPassword, validNewPassword } = handleInputs;

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
            name="newPassword"
            placeholder=""
            onChange={onChange}
            data-test-id="passwordreset1-form"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirma escribiendola nuevamente</Form.Label>
          <Form.Control
            type="password"
            name="validNewPassword"
            placeholder=""
            onChange={onChange}
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
