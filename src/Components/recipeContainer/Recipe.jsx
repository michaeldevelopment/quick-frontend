import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ImBlocked } from "react-icons/im";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  handleDeleteRecipe,
  loadRecipeToFav,
  handleDeleteFavRecipe,
} from "../../Store/actions";

import CardHeaderRecipe from "./CardHeaderRecipe";
import CardBodyRecipe from "./CardBodyRecipe";
import CardFooterRecipe from "./CardFooterRecipe";

import AddToFavModal from "./AddToFavModal";
import DeleteModal from "./DeleteModal";

import "../components.scss";

const Recipe = ({
  title,
  username,
  category,
  foodHour,
  ingredients,
  description,
  date,
  premium,
  idRecipe,
  img,
  textPage,
}) => {
  const userData = useSelector((state) => state.userData);
  const alert = useSelector((state) => state.alert);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();

  const addToFav = (e) => {
    e.preventDefault();
    dispatch(loadRecipeToFav(idRecipe));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    textPage.includes("recetas")
      ? dispatch(handleDeleteRecipe(idRecipe))
      : dispatch(handleDeleteFavRecipe(idRecipe));
  };

  return (
    <>
      <Col key={idRecipe} lg={4} md={6} xs={12}>
        <Card className="recipeCard my-3">
          <Card.Img
            variant="top"
            src={img}
            className="imgRecipe mx-auto rounded img-thumbnail"
          />
          <CardHeaderRecipe
            premium={premium ? "danger" : "secondary"}
            text={premium ? "Premium" : "Free"}
          />
          <CardBodyRecipe
            title={title}
            foodHour={foodHour}
            category={category}
          />
          <CardFooterRecipe username={username} date={date} />

          {id ? (
            <Button variant="success" onClick={() => setShowDelete(true)}>
              Eliminar de {textPage}
            </Button>
          ) : !premium || userData?.premium ? (
            <Button variant="danger" onClick={() => setShow(true)}>
              Ver más
            </Button>
          ) : (
            <Button variant="danger" disabled={true}>
              <ImBlocked className="text-white" /> Ver más
            </Button>
          )}
        </Card>
      </Col>

      <AddToFavModal
        show={show}
        setShow={setShow}
        img={img}
        description={description}
        alert={alert}
        title={title}
        userData={userData}
        onClick={addToFav}
        ingredients={ingredients}
      />

      <DeleteModal
        showDelete={showDelete}
        setShowDelete={setShowDelete}
        alert={alert}
        textPage={textPage}
        onClick={handleDelete}
      />
    </>
  );
};

export default Recipe;
