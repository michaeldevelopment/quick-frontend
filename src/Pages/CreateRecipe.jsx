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

import quickIcon from "../Images/small-icon.png";
import req from "../axiosReq/index";
import "./pages.scss";

import { useSelector, useDispatch } from "react-redux";
import { addRecipe, alertMessage } from "../Store/actions";

export default function CreateRecipe() {
  const [handleInputs, setHandleInputs] = useState([]);
  const [handleIngredients, setHandleIngredients] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [check, setCheck] = useState();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const handleCheckbox = (e) => {
    setCheck(e.target.value);
  };

  const handleIngredientsChange = ({ target }) => {
    setHandleIngredients({
      ...handleIngredients,
      [target.name]: target.value,
    });
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
          dispatch(
            alertMessage({
              value: true,
              message: error.message,
              type: "danger",
            })
          );
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let ingredientsObj = [];

    for (var i = 1; i <= handleInputs.ingredientsAmount; i++) {
      const obj = {
        name: handleIngredients[`ingredient${i}`],
        quantity: handleIngredients[`quantity${i}`],
      };
      ingredientsObj.push(obj);
    }

    const { title, category, food_hour, description, photos } = handleInputs;

    const recipe = {
      title,
      category,
      food_hour,
      ingredients: ingredientsObj,
      description,
      photos,
      premium: check === "on" ? true : false,
    };

    req.createRecipeReq(recipe).then(({ data }) => {
      if (data.error) {
        dispatch(
          alertMessage({
            value: data.error,
            message: data.message,
            variant: "danger",
          })
        );
      } else {
        dispatch(addRecipe(data.savedRecipe));
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
      <Form className="recipe-form" noValidate onSubmit={handleSubmit}>
        <Row>
          <Col className="p-3" lg={6} md={12}>
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
                      data-test-id="title-recipe-form"
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingSelect" label="Categoría">
                    <Form.Select
                      aria-label="Floating label select example"
                      onChange={handleChange}
                      name="category"
                      data-test-id="category-select-form"
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
                      data-test-id="food-type-form"
                    >
                      <option value="opt">Selecciona una opción</option>
                      <option value="desayuno">Desayuno</option>
                      <option value="almuerzo">Almuerzo</option>
                      <option value="cena">Cena</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              <FloatingLabel
                controlId="floatingSelect"
                label="Cantidad de ingredientes"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  className="mt-4"
                  onChange={handleChange}
                  name="ingredientsAmount"
                  data-test-id="ingredients-select-form"
                >
                  <option value="opt">Selecciona una opción</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea2"
                label="Preparación"
                className="text-muted"
              >
                <Form.Control
                  className="my-4"
                  as="textarea"
                  style={{ height: "300px" }}
                  placeholder="Escribe aquí la preparación detallada de ésta receta"
                  onChange={handleChange}
                  name="description"
                  data-test-id="description-recipe-form"
                />
              </FloatingLabel>
            </Form.Group>

            {userData?.premium && (
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
                data-test-id="photos-recipe-form"
              />
            </Form.Group>
          </Col>

          <Col>
            <Row lg={6} md={12}>
              {handleInputs.ingredientsAmount ? (
                Array.from(
                  {
                    length: handleInputs.ingredientsAmount,
                  },
                  (v, i) => i
                ).map((index) => (
                  <Col lg={4} key={index + 1}>
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label={`Ingrediente ${index + 1}`}
                      className="my-4 text-muted recipeIngredients"
                    >
                      <Form.Control
                        type="text"
                        onChange={handleIngredientsChange}
                        name={`ingredient${index + 1}`}
                        data-test-id={`ingredient-${index + 1}`}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Cantidad"
                      className="my-4 text-muted recipeIngredients  "
                    >
                      <Form.Control
                        type="text"
                        onChange={handleIngredientsChange}
                        name={`quantity${index + 1}`}
                        data-test-id={`quantity-${index + 1}`}
                      />
                    </FloatingLabel>
                  </Col>
                ))
              ) : (
                <div className="mx-auto">
                  <Image src={quickIcon} alt="quick-logo" />
                </div>
              )}
            </Row>
          </Col>
          <Button
            variant="danger"
            type="submit"
            disabled={isUploaded}
            id="button-create-recipe"
            size="lg"
          >
            Crear Receta
            {showSpinner && (
              <Spinner
                animation="border"
                className="spinner-border-sm"
                variant="white"
              />
            )}
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
