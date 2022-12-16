import React from "react";

import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { FcOk } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { alertMessage } from "../../Store/actions";

export default function AddToFavModal({
  show,
  setShow,
  alert,
  title,
  userData,
  onClick,
  img,
  description,
  ingredients,
}) {
  const dispatch = useDispatch();

  return (
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
        {console.log(userData)}
        {userData?.username && (
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>Agregar a favoritos</Tooltip>}
          >
            <Button
              className="mx-3"
              size="sm"
              variant="light"
              onClick={onClick}
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
  );
}
