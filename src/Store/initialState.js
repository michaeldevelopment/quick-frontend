import { getUser } from "../Session/dataUser";

export const initialState = {
  userData: getUser(),
  recipes: [],
  currentUserRecipes: [],
  userPremiumStatus: null,
};
