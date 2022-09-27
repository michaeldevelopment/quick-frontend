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

export const loadRecipes = (recipes) => ({
  type: "loadRecipes",
  payload: recipes,
});

export const loadFavRecipes = (recipes) => ({
  type: "loadFavRecipes",
  payload: recipes,
});

export const alertMessage = (alert) => ({
  type: "alertMessage",
  payload: alert,
});

export const addRecipe = (recipe) => ({
  type: "addRecipe",
  payload: recipe,
});

export const deleteRecipe = (idRecipe) => ({
  type: "deleteRecipe",
  payload: idRecipe,
});

export const logoutUser = () => ({
  type: "logoutUser",
  payload: null,
});

export const authPremiumUser = (premiumStatus) => ({
  type: "authPremiumUser",
  payload: premiumStatus,
});

export const addRecipeToFav = (idRecipe) => ({
  type: "addRecipeToFav",
  payload: idRecipe,
});

export const deleteFavRecipe = (idRecipe) => ({
  type: "deleteFavRecipe",
  payload: idRecipe,
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
    favRecipes: userData?.favRecipes,
  };

  if (authType === "login") dispatch(loadFavRecipes(user.favRecipes));

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

export const fetchFavRecipes = (idUser) => async (dispatch) => {
  const favRecipes = await req
    .getFavRecipesReq(idUser)
    .then((response) => response.data.favoriteRecipes);

  dispatch(loadFavRecipes(favRecipes));
};

export const loadRecipeToFav = (idRecipe) => async (dispatch) => {
  const response = await req
    .addToFavReq(idRecipe)
    .then((response) => response.data);

  response.error
    ? dispatch(
        alertMessage({
          value: true,
          message: response.message,
          variant: "danger",
        })
      )
    : (dispatch(
        alertMessage({
          value: true,
          message: response.message,
          variant: "success",
        })
      ),
      dispatch(addRecipeToFav(idRecipe)));
};

export const handleDeleteRecipe = (idRecipe) => async (dispatch) => {
  const response = req.deleteRecipeReq(idRecipe).then((response) => {
    response.data;
  });

  response.error
    ? dispatch(
        alertMessage({
          message: response.message,
          value: true,
          variant: "danger",
        })
      )
    : (dispatch(
        alertMessage({
          message: response.message,
          value: true,
          variant: "success",
        })
      ),
      dispatch(deleteRecipe(idRecipe)));
};

export const handleDeleteFavRecipe = (idRecipe) => async (dispatch) => {
  const response = req.deleteFavReq(idRecipe).then((response) => {
    response.data;
  });

  response.error
    ? dispatch(
        alertMessage({
          message: response.message,
          value: true,
          variant: "danger",
        })
      )
    : (dispatch(
        alertMessage({
          message: response.message,
          value: true,
          variant: "success",
        })
      ),
      dispatch(deleteFavRecipe(idRecipe)));
};
