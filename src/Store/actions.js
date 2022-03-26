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

export const logoutUser = () => ({
  type: "logoutUser",
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

export const userAuth = (dataLogin, authType) => async (dispatch) => {
  const userData =
    authType === "login"
      ? await req.loginReq(dataLogin).then((response) => response.data)
      : await req.signUpReq(dataLogin).then((response) => response.data);

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

  const { username, email, id, premium, token } = userData;

  dispatch(loadUser(user));
  setUser(username, email, id, premium);

  dispatch(loadToken(token));
  setToken(token);
};

export const fetchRecipes = () => async (dispatch) => {
  const recipes = await req.getRecipesReq().then((response) => response.data);
  dispatch(loadRecipes(recipes));
};
