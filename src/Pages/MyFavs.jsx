import React, { useEffect } from "react";
import Recipe from "../Components/recipeContainer/Recipe";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { useSelector } from "react-redux";

import "./pages.scss";

export default function MyFavs() {
  const myFavRecipes = useSelector((state) => state.myFavs);
  const userData = useSelector((state) => state.userData);

  return (
    <>
      <Container>
        <h1> Mis favoritos </h1>
        <Row>
          {myFavRecipes?.length ? (
            myFavRecipes.map(({ id, ...recipe }) => (
              <Recipe
                {...recipe}
                key={id}
                idRecipe={id}
                username={userData?.username}
                textPage="mis favoritos"
              />
            ))
          ) : (
            <p> No tienes ninguna receta agregada a favoritos </p>
          )}
        </Row>
      </Container>
    </>
  );
}
