import React, { useEffect } from "react";
import Recipe from "../Components/Recipe";

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
            myFavRecipes.map((recipe) => (
              <Recipe
                title={recipe.title}
                username={userData?.username}
                category={recipe.category}
                food_hour={recipe.food_hour}
                ingredients={recipe.ingredients}
                description={recipe.description}
                idRecipe={recipe.id}
                date={recipe.createdAt}
                premium={recipe.premium}
                img={recipe.photos}
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
