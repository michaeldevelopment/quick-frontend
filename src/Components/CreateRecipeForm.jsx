import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import quickIcon from "../Images/small-icon.png";

const CreateRecipeForm = ({
  handleSubmit,
  handleChange,
  userData,
  handleCheckbox,
  check,
  handlePhotoChange,
  handleIngredientsChange,
  handleInputs,
  isUploaded,
  showSpinner,
}) => {
  return (
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
  );
};

export default CreateRecipeForm;
