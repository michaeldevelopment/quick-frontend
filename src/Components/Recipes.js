import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Recipe = React.lazy(() => import("../Components/Recipe"));

const Recipes = ({ recipes }) => {
  return (
    <div>
      {recipes.length ? (
        recipes
          .filter((recipe) => recipe.premium)
          .map((recipe) => (
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
                premium={recipe.premium}
                idRecipe={recipe.id}
                img={recipe.photos}
                date={recipe.createdAt}
                key={recipe.id}
              />
            </Suspense>
          ))
      ) : (
        <p> No existen recetas por el momento </p>
      )}
    </div>
  );
};

export default Recipes;
