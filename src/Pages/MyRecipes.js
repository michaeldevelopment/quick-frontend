import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Recipe from "../Components/Recipe";

import { useParams } from "react-router-dom";

import "./pages.scss";
import { useSelector } from "react-redux";

export default function MyRecipes() {
  const recipes = useSelector((state) => state.recipes);
  const dataUser = useSelector((state) => state.dataUser);
  const { id } = useParams();

  const myRecipes = recipes.filter((recipe) => recipe.user.id === id);

  return (
    <>
      <Container>
        <h3> Mis recetas </h3>
        <Row>
          {myRecipes.length ? (
            myRecipes.map((recipe) => (
              <Recipe
                title={recipe.title}
                username={dataUser?.username}
                category={recipe.category}
                food_hour={recipe.food_hour}
                ingredients={recipe.ingredients}
                description={recipe.description}
                idRecipe={recipe.id}
                date={recipe.createdAt}
                premium={recipe.premium}
                img={recipe.photos}
                key={recipe.id}
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
