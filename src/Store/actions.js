import req from "../axiosReq/index";
import { setUser, setToken } from "../Session/dataUser";

export const loadUser = (user) => ({
  type: "loadUser",
  payload: user,
});

export const loadToken = (token) => ({
  type: "loadToken",
  payload: token,
});

export const logOut = () => ({
  type: "logOut",
  payload: null,
});

export const loadRecipes = (recipes) => ({
  type: "loadRecipes",
  payload: recipes,
});

export const alertMessage = (alert) => ({
  type: "alertMessage",
  payload: alert,
});

export const loginUser = (dataLogin) => async (dispatch) => {
  const userData = await req
    .loginReq(dataLogin)
    .then((response) => response.data);

  if (userData.error)
    return dispatch(
      alertMessage({
        value: userData.error,
        message: userData.message,
        variant: "danger",
      })
    );

  const user = {
    username: userData.username,
    email: userData.email,
    id: userData.id,
    premium: userData.premium,
  };

  const token = userData.token;

  dispatch(loadUser(user));
  setUser(user);

  dispatch(loadToken(token));
  setToken(token);
};

export const fetchRecipes = () => async (dispatch) => {
  const recipes = await req.getRecipesReq().then((response) => response.data);
  dispatch(loadRecipes(recipes));
};
