import React, { Suspense } from "react";
import Slider from "react-slick";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Spinner from "react-bootstrap/Spinner";
const Recipe = React.lazy(() => import("../Components/Recipe"));

export default function AllRecipes({ recipes }) {
  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    rtl: true,
  };

  return (
    <>
      <div className="bg-white py-3">
        <Container className="text-center my-4">
          <h3> Recetas Premium </h3>
          <Row>
            {recipes.length ? (
              recipes
                .filter((recipe) => recipe.premium === true)
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
                    <div key={recipe.id}>
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
                    </div>
                  </Suspense>
                ))
            ) : (
              <p> No existen recetas por el momento </p>
            )}
          </Row>
        </Container>
        <Container className="text-center my-4">
          <h3> Recetas Free </h3>
          <Row>
            {recipes.length ? (
              <Slider {...settings}>
                {recipes
                  .filter((recipe) => recipe.premium === false)
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
                        idRecipe={recipe.id}
                        premium={recipe.premium}
                        img={recipe.photos}
                        date={recipe.createdAt}
                        key={recipe.id}
                      />
                    </Suspense>
                  ))}
              </Slider>
            ) : (
              <p> No existen recetas por el momento </p>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}
