import { getToken } from "../Session/dataUser";
import axios from "axios";
import config from "../config";

const signUpReq = async (obj) => {
  return await axios.post(`${config.apiUrl}/users/signup`, obj);
};

const loginReq = async (obj) => {
  return await axios.post(`${config.apiUrl}/users/login`, obj);
};

const getUserDataReq = async (userId) => {
  return await axios.get(`${config.apiUrl}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

const getRecipesReq = async () => {
  return await axios.get(`${config.apiUrl}/recipes`);
};

const createRecipeReq = async (obj) => {
  return await axios.post(`${config.apiUrl}/recipes/createrecipe`, obj, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

const addToFavReq = async (recipeId) => {
  return await axios.put(
    `${config.apiUrl}/recipes`,
    { recipeId },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
};

const deleteRecipeReq = async (recipeId) => {
  return await axios.delete(`${config.apiUrl}/recipes/${recipeId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

const deleteFavReq = async (recipeId) => {
  return await axios.put(
    `${config.apiUrl}/users/${recipeId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
};

const stripeReq = async (obj) => {
  return await axios.post(`${config.apiUrl}/payments`, obj, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export default {
  signUpReq,
  loginReq,
  getRecipesReq,
  createRecipeReq,
  addToFavReq,
  getUserDataReq,
  deleteRecipeReq,
  deleteFavReq,
  stripeReq,
};
