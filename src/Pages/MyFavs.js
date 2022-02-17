import React, { useState, useEffect } from "react";
import Recipe from "../Components/Recipe";
import SkeletonRecipe from "../Components/SkeletonRecipe";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

import req from "../axiosReq/index";
import "./pages.scss";
import { useAuth } from "../Context/useAuth";

export default function MyFavs() {
  const [myFavRecipes, setMyFavRecipes] = useState([]);
  const auth = useAuth();
  const { id } = useParams();
  const { user } = auth;

  useEffect(
    () =>
      req
        .getUserDataReq(id)
        .then(({ data }) =>
          setMyFavRecipes(...myFavRecipes, data.favoriteRecipes)
        ),
    []
  );

  return (
    <>
      <Container>
        <h1> Mis favoritos </h1>
        <Row>
          {myFavRecipes.length ? (
            myFavRecipes.map((recipe) => (
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
