import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import req from "../axiosReq/index";
import "./pages.scss";

import { useSelector, useDispatch } from "react-redux";
import { addRecipe, alertMessage } from "../Store/actions";

import CreateRecipeForm from "../Components/CreateRecipeForm";

export default function CreateRecipe() {
  const [handleInputs, setHandleInputs] = useState([]);
  const [handleIngredients, setHandleIngredients] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [check, setCheck] = useState();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const handleCheckbox = (e) => {
    setCheck(e.target.value);
  };

  const handleIngredientsChange = ({ target }) => {
    setHandleIngredients({
      ...handleIngredients,
      [target.name]: target.value,
    });
  };

  const handleChange = ({ target }) => {
    setHandleInputs({ ...handleInputs, [target.name]: target.value });
  };

  const handlePhotoChange = ({ target }) => {
    setIsUploaded(true);
    setShowSpinner(true);
    const formData = new FormData();
    let files = target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "huktx7ua");
      req
        .uploadPhotoReq(
          "https://api.cloudinary.com/v1_1/dmtvdqzof/image/upload",
          formData
        )
        .then((response) => {
          setHandleInputs({
            ...handleInputs,
            [target.name]: response.data.url,
          });
          setIsUploaded(false);
          setShowSpinner(false);
        })
        .catch((error) => {
          dispatch(
            alertMessage({
              value: true,
              message: error.message,
              type: "danger",
            })
          );
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let ingredientsObj = [];

    for (var i = 1; i <= handleInputs.ingredientsAmount; i++) {
      const obj = {
        name: handleIngredients[`ingredient${i}`],
        quantity: handleIngredients[`quantity${i}`],
      };
      ingredientsObj.push(obj);
    }

    const { title, category, food_hour, description, photos } = handleInputs;

    const recipe = {
      title,
      category,
      food_hour,
      ingredients: ingredientsObj,
      description,
      photos,
      premium: check === "on" ? true : false,
    };

    req.createRecipeReq(recipe).then(({ data }) => {
      if (data.error) {
        dispatch(
          alertMessage({
            value: data.error,
            message: data.message,
            variant: "danger",
          })
        );
      } else {
        dispatch(addRecipe(data.savedRecipe));
        navigate("/recipecreated");
      }
    });
  };

  const createRecipeFormProps = {
    handleSubmit,
    handleChange,
    userData,
    handleCheckbox,
    check,
    handlePhotoChange,
    handleIngredientsChange,
    handleInputs,
    isUploaded,
    showSpinner,
  };

  return (
    <Container className="p-3">
      {alert.value && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ ...alert, value: false })}
          dismissible
        >
          <p>{alert.message}</p>
        </Alert>
      )}
      <CreateRecipeForm {...createRecipeFormProps} />
    </Container>
  );
}
