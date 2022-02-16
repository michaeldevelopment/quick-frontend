import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaStar } from "react-icons/fa";

import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";

import { useAuth } from "../Context/useAuth";
import req from "../axiosReq/index";
import "./components.scss";

const Recipe = ({
  title,
  category,
  food_hour,
  ingredients,
  description,
  date,
  id,
}) => {
  const [show, setShow] = useState(false);
  const auth = useAuth();
  const { user } = auth;

  const addToFav = (e) => {
    e.preventDefault();
    req.addToFavReq(id).then((response) => console.log(response.data));
  };

  return (
    <>
      <Col key={id} lg={3} md={6} xs={12}>
        <Card className="recipeCard my-3">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Header as="h5">{title}</Card.Header>
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
              Creado por {user?.username}
              {/* Hace: 
              {date
                ? formatDistance(new Date(), new Date(date), {
                    locale: es,
                  })
                : ""} */}
            </small>
          </Card.Footer>
          <Button variant="primary" onClick={() => setShow(true)}>
            Ver más
          </Button>
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
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Recipe;
