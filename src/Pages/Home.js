import React, { Suspense } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import "./pages.scss";

const Recipe = React.lazy(() => import("../Components/Recipe"));

const Home = ({ recipes }) => {
  return (
    <>
      <Container>
        <h3> Recetas </h3>
        <Row>
          {recipes ? (
            recipes.map((recipe) => (
              <Suspense
                fallback={
                  <Spinner
                    animation="border"
                    variant="secondary"
                    className="mx-3"
                  />
                }
                key={recipe.id}
              >
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
              </Suspense>
            ))
          ) : (
            <p> No existen recetas por el momento </p>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Home;
