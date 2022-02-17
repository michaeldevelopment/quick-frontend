import { getToken } from "../Session/dataUser";
import axios from "axios";

const url = "http://localhost:3003/api/v1";

const signUpReq = (obj) => {
  return axios.post(`${url}/users/signup`, obj);
};

const loginReq = (obj) => {
  return axios.post(`${url}/users/login`, obj);
};

const getUserDataReq = (userId) => {
  return axios.get(`${url}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

const getRecipesReq = () => {
  return axios.get(`${url}/recipes`);
};

const createRecipeReq = (obj) => {
  return axios.post(`${url}/recipes/createrecipe`, obj, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

const addToFavReq = (recipeId) => {
  return axios.put(
    `${url}/recipes`,
    { recipeId },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
};

const deleteRecipeReq = (recipeId) => {
  return axios.delete(`${url}/recipes/${recipeId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

const deleteFavReq = (recipeId) => {
  return axios.put(
    `${url}/users/${recipeId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
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
};
