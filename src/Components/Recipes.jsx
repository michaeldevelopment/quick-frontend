import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";

const Recipe = React.lazy(() => import("./recipeContainer/Recipe"));

const Recipes = ({ recipes, isPremium }) => {
  return (
    <div>
      {!isPremium && recipes.length ? (
        recipes
          .filter((recipe) => recipe.premium === isPremium)
          .map(({ id, ...recipe }) => (
            <Suspense
              fallback={
                <Spinner
                  animation="border"
                  variant="secondary"
                  className="mx-3"
                />
              }
              key={id}
            >
              <Recipe {...recipe} idRecipe={id} key={id} />
            </Suspense>
          ))
      ) : (
        <p> No existen recetas por el momento </p>
      )}
    </div>
  );
};

export default Recipes;
