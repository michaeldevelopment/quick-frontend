import { useState } from "react";
import {
  Alert,
  Container,
  Col,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import req from "../axiosReq/index";

export default function EmailRecovery() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();
  const [alert, setAlert] = useState();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    const objectPostReq = { email };

    req.passwordRecoveryReq(objectPostReq).then(({ data }) => {
      if (data.error) {
        setMessage(data.message);
        setAlert(data.error);
      } else {
        navigate(`/passwordrecovery/${data.id}`);
      }
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container className="my-5 mx-auto">
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
      <h1 className="text-center">Recuperación de contraseña</h1>
      <Col className="text-center">
        <Form
          className="col-md-4 mx-auto"
          onSubmit={handleForm}
          noValidate
          autoComplete="off"
        >
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Escribe el email asociado a tu cuenta"
              className="my-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={handleEmail}
                data-test-id="email-recovery-input"
              />
            </FloatingLabel>
            <Button
              variant="danger"
              type="submit"
              id="email-recovery-button"
              size="lg"
            >
              Enviar email de recuperación
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Container>
  );
}
