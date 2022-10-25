import React from "react";

import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";

export default function DeleteModal({
  showDelete,
  setShowDelete,
  alert,
  textPage,
  onClick,
}) {
  const dispatch = useDispatch();

  return (
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

        <Button size="md" variant="danger" onClick={onClick}>
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
  );
}
