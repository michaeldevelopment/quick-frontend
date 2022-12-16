import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Recipe from "../Components/recipeContainer/Recipe";

import { useParams } from "react-router-dom";

import "./pages.scss";
import { useSelector } from "react-redux";

export default function MyRecipes() {
  const recipes = useSelector((state) => state.recipes);
  const userData = useSelector((state) => state.userData);
  const { id } = useParams();

  const myRecipes = recipes.filter((recipe) => recipe.user.id === id);

  return (
    <>
      <Container>
        <h3> Mis recetas </h3>
        <Row>
          {myRecipes.length ? (
            myRecipes.map(({ id, ...recipe }) => (
              <Recipe
                {...recipe}
                key={id}
                idRecipe={id}
                username={userData?.username}
                textPage="mis recetas"
              />
            ))
          ) : (
            <p> No has creado ninguna receta</p>
          )}
        </Row>
      </Container>
    </>
  );
}
