import { getUser, getToken } from "../Session/dataUser";

export const initialState = {
  userData: getUser(),
  recipes: [],
  currentUserRecipes: [],
  userToken: getToken(),
  alert: {},
};
