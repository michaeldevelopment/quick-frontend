import React, { Suspense } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Recipes from "./Recipes";

export default function AllRecipes({ recipes }) {
  return (
    <>
      <div className="bg-white py-3">
        <Container className="text-center my-4">
          <h3> Recetas Premium </h3>
          <Row>
            <Recipes recipes={recipes} isPremium={true} />
          </Row>
        </Container>
        <Container className="text-center">
          <h3> Recetas Free </h3>
          <Row>
            <Recipes recipes={recipes} isPremium={false} />
          </Row>
        </Container>
      </div>
    </>
  );
}
