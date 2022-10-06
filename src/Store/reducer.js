import { initialState } from "./initialState";

function reducer(prevState = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "loadRecipes":
      return { ...prevState, recipes: payload };
    case "loadFavRecipes":
      return { ...prevState, myFavs: payload };
    case "loadUser":
      const user = {
        username: payload.username,
        email: payload.email,
        id: payload.id,
        premium: payload.premium,
      };
      return {
        ...prevState,
        userData: user,
      };
    case "logoutUser":
      return {
        ...prevState,
        userData: payload,
        userToken: payload,
      };
    case "loadToken":
      return { ...prevState, userToken: payload };
    case "alertMessage":
      return { ...prevState, alert: payload };
    case "deleteRecipe":
      return {
        ...prevState,
        recipes: prevState.recipes.filter((recipe) => recipe.id !== payload),
        myFavs: prevState.myFavs.filter(
          (favRecipe) => favRecipe.id !== payload
        ),
      };
    case "addRecipe":
      return {
        ...prevState,
        recipes: prevState.recipes.concat(payload),
      };
    case "authPremiumUser":
      return {
        ...prevState,
        userData: { ...prevState.userData, premium: payload },
      };
    case "addRecipeToFav":
      return {
        ...prevState,
        myFavs: prevState.myFavs.concat(
          prevState.recipes.find((recipe) => recipe.id === payload)
        ),
      };
    case "deleteFavRecipe":
      return {
        ...prevState,
        myFavs: prevState.myFavs.filter(
          (favRecipe) => favRecipe.id !== payload
        ),
      };
    default:
      return prevState;
  }
}

export default reducer;
