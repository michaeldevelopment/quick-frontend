import { getToken } from "../Session/dataUser";
import axios from "axios";

const url = "http://localhost:3003/api/v1";

const signUpReq = (obj) => {
  return axios.post(`${url}/users/signup`, obj);
};

const loginReq = (obj) => {
  return axios.post(`${url}/users/login`, obj);
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

export default {
  signUpReq,
  loginReq,
  getRecipesReq,
  createRecipeReq,
  addToFavReq,
};
