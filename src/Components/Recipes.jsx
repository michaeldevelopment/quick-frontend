import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";

const Recipe = React.lazy(() => import("./recipeContainer/Recipe"));

const Recipes = ({ recipes, isPremium }) => {
  return (
    <>
      {!isPremium && recipes.length ? (
        recipes
          .filter((recipe) => recipe.premium === isPremium)
          .map(({ id, user, ...recipe }) => (
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
              <Recipe
                {...recipe}
                idRecipe={id}
                key={id}
                username={user.username}
              />
            </Suspense>
          ))
      ) : (
        <p> No existen recetas por el momento </p>
      )}
    </>
  );
};

export default Recipes;
