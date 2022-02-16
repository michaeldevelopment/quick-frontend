import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import Recipe from "../Components/Recipe";

export default function MyRecipes({ recipes }) {
  const [myRecipes, setMyRecipes] = useState([]);
  const { id } = useParams();

  const findRecipe = recipes.find((recipe) => recipe.user.id === id);
  useEffect(() => setMyRecipes([...myRecipes, findRecipe]), []);

  console.log(myRecipes);
  return (
    <>
      <Container>
        <h1> Hola </h1>
        <Row>
          {myRecipes &&
            myRecipes.map((recipe) => (
              <Recipe
                title={recipe.title}
                category={recipe.category}
                food_hour={recipe.food_hour}
                ingredients={recipe.ingredients}
                description={recipe.description}
                id={recipe.id}
                date={recipe.createdAt}
                key={recipe.id}
              />
            ))}
        </Row>
      </Container>
    </>
  );
}
