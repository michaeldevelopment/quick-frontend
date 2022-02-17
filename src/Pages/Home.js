import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Recipe from "../Components/Recipe";
import "./pages.scss";

const Home = ({ recipes }) => {
  return (
    <>
      <Container>
        <h1> Recetas </h1>
        <Row>
          {recipes &&
            recipes.map((recipe) => (
              <Recipe
                title={recipe.title}
                username={recipe.user.username}
                category={recipe.category}
                food_hour={recipe.food_hour}
                ingredients={recipe.ingredients}
                description={recipe.description}
                idRecipe={recipe.id}
                date={recipe.createdAt}
                key={recipe.id}
              />
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
