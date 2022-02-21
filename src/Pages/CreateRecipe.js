import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import axios from "axios";

import { useAuth } from "../Context/useAuth";

import quickIcon from "../Images/small-icon.png";
import req from "../axiosReq/index";
import "./pages.scss";

export default function CreateRecipe() {
  const [handleInputs, setHandleInputs] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [alert, setAlert] = useState({});
  const [check, setCheck] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const { user } = auth;

  const handleCheckbox = (e) => {
    setCheck(e.target.value);
  };

  const handleChange = ({ target }) => {
    setHandleInputs({ ...handleInputs, [target.name]: target.value });
  };

  const handlePhotoChange = ({ target }) => {
    setIsUploaded(true);
    setShowSpinner(true);
    const formData = new FormData();
    let files = target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "huktx7ua");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/dmtvdqzof/image/upload",
          formData
        )
        .then((response) => {
          setHandleInputs({
            ...handleInputs,
            [target.name]: response.data.url,
          });
          setIsUploaded(false);
          setShowSpinner(false);
        })
        .catch((error) => {
          setAlert({ value: true, message: error.message, type: "danger" });
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, category, food_hour, ingredients, description, photos } =
      handleInputs;

    const recipe = {
      title,
      category,
      food_hour,
      ingredients,
      description,
      photos,
      premium: check === "on" ? true : false,
    };

    req.createRecipeReq(recipe).then(({ data }) => {
      if (data.error) {
        setAlert({
          value: data.error,
          message: data.message,
          variant: "danger",
        });
      } else {
        setAlert({
          value: true,
          message: data.message,
          variant: "success",
        });

        navigate("/recipecreated");
      }
    });
  };

  return (
    <Container className="p-3">
      {alert.value && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ ...alert, value: false })}
          dismissible
        >
          <p>{alert.message}</p>
        </Alert>
      )}
      <Row>
        <Col>
          <Image src={quickIcon} alt="quick-logo" />
          <h3>
            <strong> Hora de crear tu receta! </strong>
          </h3>
        </Col>

        <Col className="p-3">
          <Form className="recipe-form" noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput1"
                    label="Título de la receta"
                    className="text-muted"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Arroz con pollo"
                      onChange={handleChange}
                      name="title"
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingSelect" label="Categoría">
                    <Form.Select
                      aria-label="Floating label select example"
                      onChange={handleChange}
                      name="category"
                    >
                      <option value="opt">Selecciona una opción</option>
                      <option value="pollo">Pollo</option>
                      <option value="aves">Ave</option>
                      <option value="carne">Carne</option>
                      <option value="pescado">Pescado</option>
                      <option value="ensalada">Ensalada</option>
                      <option value="salsa">Salsa</option>
                      <option value="huevos">Huevos</option>
                      <option value="arroces">Arroz</option>
                      <option value="pastas">Pastas</option>
                      <option value="sopas">Sopa</option>
                      <option value="corriente">Corriente</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Tipo de comida"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      onChange={handleChange}
                      name="food_hour"
                    >
                      <option value="opt">Selecciona una opción</option>
                      <option value="desayuno">Desayuno</option>
                      <option value="almuerzo">Almuerzo</option>
                      <option value="cena">Cena</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>

              <Form.Group>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Ingredientes"
                  className="my-4 text-muted"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Escribe aquí los ingredientes de tu receta"
                    onChange={handleChange}
                    name="ingredients"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Preparación"
                  className="text-muted"
                >
                  <Form.Control
                    className="my-4"
                    as="textarea"
                    rows={8}
                    placeholder="Escribe aquí la preparación detallada de ésta receta"
                    onChange={handleChange}
                    name="description"
                  />
                </FloatingLabel>
              </Form.Group>
            </Form.Group>

            {user?.premium && (
              <Form.Group
                className="mb-3 d-flex justify-content-center"
                id="formGridCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Receta Premium"
                  onChange={handleCheckbox}
                  check={check}
                />
              </Form.Group>
            )}

            <Form.Group controlId="formFileMultiple" className="mb-3">
              <input
                type="file"
                name="photos"
                accept=".jpg,.jpeg,.gif,.png"
                onChange={handlePhotoChange}
                multiple
                data-test-id="photos-post-form"
              />
            </Form.Group>

            <Button variant="danger" type="submit" disabled={isUploaded}>
              Crear Receta
              {showSpinner && (
                <Spinner
                  animation="border"
                  className="spinner-border-sm"
                  variant="white"
                />
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
