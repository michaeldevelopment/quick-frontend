import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function RecipeCreated() {
  const navigate = useNavigate();
  return (
    <>
      <Container className="mx-auto text-center">
        <h2>
          <BsFillCheckCircleFill className="text-success my-3" />
        </h2>
        <h3>¡La receta ha sido creada ha sido creada satisfactoriamente!</h3>
        <p> Gracias por compartir tu experticie. </p>
        <Button variant="primary" onClick={() => navigate("/")} size="lg">
          Ir al Home
        </Button>
      </Container>
    </>
  );
}
