import { getToken } from "../Session/dataUser";
import axios from "axios";
import config from "../config";

const signUpReq = async (obj) => {
  return await axios.post(`${config.apiUrl}/users/signup`, obj);
};

const loginReq = async (obj) => {
  return await axios.post(`${config.apiUrl}/users/login`, obj);
};

const getFavRecipesReq = async (userId) => {
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

const makePaymentReq = async (obj) => {
  return await axios.post(`${config.apiUrl}/payments/makepayment`, obj, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

const passwordResetReq = async (obj) => {
  return await axios.post(`${config.apiUrl}/users/passwordreset`, obj);
};

const passwordRecoveryReq = async (email) => {
  return await axios.post(`${config.apiUrl}/users/passwordrecovery`, email);
};

export default {
  signUpReq,
  loginReq,
  getRecipesReq,
  createRecipeReq,
  addToFavReq,
  deleteRecipeReq,
  deleteFavReq,
  makePaymentReq,
  passwordRecoveryReq,
  passwordResetReq,
  getFavRecipesReq,
};
