import { getUser, getToken } from "../Session/dataUser";

export const initialState = {
  userData: getUser(),
  userToken: getToken(),
  recipes: [],
  myFavs: [],
  alert: {},
};
