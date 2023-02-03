import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";
import { FaStar } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { FcOk } from "react-icons/fc";

import { useParams } from "react-router-dom";

import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";

import { useSelector, useDispatch } from "react-redux";

import {
  handleDeleteRecipe,
  loadRecipeToFav,
  alertMessage,
  handleDeleteFavRecipe,
} from "../Store/actions";

import "./components.scss";

const Recipe = ({
  title,
  username,
  category,
  food_hour,
  ingredients,
  description,
  date,
  premium,
  idRecipe,
  img,
  textPage,
}) => {
  const userData = useSelector((state) => state.userData);
  const alert = useSelector((state) => state.alert);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();

  const addToFav = (e) => {
    e.preventDefault();
    dispatch(loadRecipeToFav(idRecipe));
  };

  const handleDelete = (e) => {
    e.preventDefault;
    textPage.includes("recetas")
      ? dispatch(handleDeleteRecipe(idRecipe))
      : dispatch(handleDeleteFavRecipe(idRecipe));
  };

  return (
    <>
      <Col key={idRecipe} lg={4} md={6} xs={12}>
        <Card className="recipeCard my-3">
          <Card.Img
            variant="top"
            src={img}
            className="imgRecipe mx-auto rounded img-thumbnail"
          />
          <Card.Header className="cardHeader">
            {premium ? (
              <Badge bg="danger">Premium</Badge>
            ) : (
              <Badge bg="secondary">Free</Badge>
            )}
          </Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p className="text-muted"> Especial para: {food_hour} </p>
            <hr />
            <p className="text-muted">
              <strong> {category} </strong>
            </p>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Creado por {username} - Hace {""}
              {date
                ? formatDistance(new Date(), new Date(date), {
                    locale: es,
                  })
                : ""}
            </small>
          </Card.Footer>
          {id ? (
            <Button variant="success" onClick={() => setShowDelete(true)}>
              Eliminar de {textPage}
            </Button>
          ) : !premium || userData?.premium ? (
            <Button variant="danger" onClick={() => setShow(true)}>
              Ver más
            </Button>
          ) : (
            <Button variant="danger" disabled={true}>
              <ImBlocked className="text-white" /> Ver más
            </Button>
          )}
        </Card>
      </Col>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
        className="modalRecipe"
      >
        {alert.value && (
          <Alert
            variant={alert.variant}
            onClose={() => {
              dispatch(alertMessage({ ...alert, value: false }));
            }}
            dismissible
          >
            <h6>{alert.message}</h6>
          </Alert>
        )}
        <Modal.Header closeButton>
          <Modal.Title>{title} </Modal.Title>
          {userData?.username && (
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Agregar a favoritos</Tooltip>}
            >
              <Button
                className="mx-3"
                size="sm"
                variant="light"
                onClick={addToFav}
              >
                <FaStar className="text-warning" />
              </Button>
            </OverlayTrigger>
          )}
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Image src={img} alt="Img" className="rounded img-thumbnail" />
            </Col>
            <Col>
              <h5> Ingredientes: </h5>
              <ul className="list-unstyled">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <FcOk className="text-warning" /> {"  "}
                    {ingredient.name} <strong>{ingredient.quantity}</strong>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <hr />
          <h5> Descripcion: </h5>
          <p> {description} </p>
        </Modal.Body>
      </Modal>

      <Modal
        show={showDelete}
        onHide={() => setShowDelete(false)}
        aria-labelledby="contained-modal-title-vcenter"
        size="sm"
        centered
        className="modalRecipe"
      >
        {alert.value && (
          <Alert
            variant={alert.variant}
            onClose={() => {
              dispatch(alertMessage({ ...alert, value: false }));
            }}
            dismissible
          >
            <h6>{alert.message}</h6>
          </Alert>
        )}
        <Modal.Header>
          <Modal.Title> ¿Estás seguro? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ¿Estás seguro de querer eliminar ésta receta de
            <strong> {textPage}? </strong>
          </p>

          <Button size="md" variant="danger" onClick={handleDelete}>
            Si
          </Button>

          <Button
            className="mx-3"
            size="md"
            variant="success"
            onClick={() => setShowDelete(false)}
          >
            No
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Recipe;
