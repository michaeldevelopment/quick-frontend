import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import Recipe from "../Components/Recipe";

import { useParams } from "react-router-dom";

import req from "../axiosReq/index";
import "./pages.scss";
import { useAuth } from "../Context/useAuth";

export default function MyRecipes() {
  const [myRecipes, setMyRecipes] = useState([]);
  const auth = useAuth();
  const { id } = useParams();
  const { user } = auth;

  useEffect(
    () =>
      req
        .getUserDataReq(id)
        .then(({ data }) => setMyRecipes(...myRecipes, data.recipes)),
    []
  );

  return (
    <>
      <Container>
        <h3> Mis recetas </h3>
        <Row>
          {myRecipes.length ? (
            myRecipes.map((recipe) => (
              <Recipe
                title={recipe.title}
                username={user?.username}
                category={recipe.category}
                food_hour={recipe.food_hour}
                ingredients={recipe.ingredients}
                description={recipe.description}
                idRecipe={recipe.id}
                date={recipe.createdAt}
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
