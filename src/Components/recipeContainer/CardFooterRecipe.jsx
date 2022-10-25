import React from "react";

import Card from "react-bootstrap/Card";

import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";

const CardFooterRecipe = ({ username, date }) => {
  return (
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
  );
};

export default CardFooterRecipe;
