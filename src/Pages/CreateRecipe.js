import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import quickIcon from "../Images/small-icon.png";
import req from "../axiosReq/index";
import "./pages.scss";

export default function CreateRecipe() {
  const [handleInputs, setHandleInputs] = useState([]);
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setHandleInputs({ ...handleInputs, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, category, food_hour, ingredients, description } =
      handleInputs;

    const recipe = {
      title,
      category,
      food_hour,
      ingredients,
      description,
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

            <p> Imagen </p>

            <Button variant="danger" type="submit">
              Crear Receta
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
