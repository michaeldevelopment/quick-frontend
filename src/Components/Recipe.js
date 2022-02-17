import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";

import req from "../axiosReq/index";
import "./components.scss";

const Recipe = ({
  title,
  username,
  category,
  food_hour,
  ingredients,
  description,
  date,
  idRecipe,
  textPage,
}) => {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [alert, setAlert] = useState({});
  const { id } = useParams();

  const addToFav = (e) => {
    e.preventDefault();
    req.addToFavReq(idRecipe).then(({ data }) => {
      data.error
        ? setAlert({ ...data, show: true, variant: "danger" })
        : setAlert({ ...data, show: true, variant: "success" });
    });
  };

  const handleDelete = (e) => {
    e.preventDefault;
    if (textPage.includes("recetas")) {
      req.deleteRecipeReq(idRecipe).then(({ data }) => {
        data.error
          ? setAlert({ ...data, show: true, variant: "danger" })
          : setAlert({ ...data, show: true, variant: "success" });
      });
    } else {
      req.deleteFavReq(idRecipe).then(({ data }) => {
        data.error
          ? setAlert({ ...data, show: true, variant: "danger" })
          : setAlert({ ...data, show: true, variant: "success" });
      });
    }
  };

  return (
    <>
      <Col key={idRecipe} lg={3} md={6} xs={12}>
        <Card className="recipeCard my-3">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Header>
            <h5>{title}</h5>
          </Card.Header>
          <Card.Body>
            <Card.Title>{ingredients}</Card.Title>
            <p className="text-muted"> Especial para: {food_hour} </p>
            <hr />
            <p className="text-muted">
              <strong> {category} </strong>
            </p>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Creado por {username}
              {/* Hace: 
              {date
                ? formatDistance(new Date(), new Date(date), {
                    locale: es,
                  })
                : ""} */}
            </small>
          </Card.Footer>
          {id ? (
            <Button variant="danger" onClick={() => setShowDelete(true)}>
              Eliminar de {textPage}
            </Button>
          ) : (
            <Button variant="primary" onClick={() => setShow(true)}>
              Ver más
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
        {alert.show && (
          <Alert
            variant={alert.variant}
            onClose={() => setAlert({ ...alert, show: false })}
            dismissible
          >
            <p>{alert.message}</p>
          </Alert>
        )}
        <Modal.Header closeButton>
          <Modal.Title>{title} </Modal.Title>
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
        </Modal.Header>
        <Modal.Body>
          <p> {ingredients} </p>
          <p>{description}</p>
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
        {alert.show && (
          <Alert
            variant={alert.variant}
            onClose={() => setAlert({ ...alert, show: false })}
            dismissible
          >
            <p>{alert.message}</p>
          </Alert>
        )}
        <Modal.Header closeButton>
          <Modal.Title> ¿Estás seguro? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> ¿Estás seguro de querer eliminar ésta receta de {textPage}? </p>

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