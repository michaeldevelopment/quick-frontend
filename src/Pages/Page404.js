import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "./pages.scss";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="mt-4">
        <strong>Error 404 </strong>
      </h1>
      <p>
        {" "}
        ¡Ops! La página que has intentado buscar es errónea o no existe.
        Porfavor inténtalo de nuevo.
      </p>
      <Button variant="danger" onClick={() => navigate("/")} size="lg">
        Ir al Home
      </Button>
    </div>
  );
}
