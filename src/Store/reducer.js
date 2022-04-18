import { initialState } from "./initialState";

function reducer(prevState = initialState, action) {
  switch (action.type) {
    case "loadRecipes":
      return { ...prevState, recipes: action.payload };
    case "loadFavRecipes":
      return { ...prevState, myFavs: action.payload };
    case "loadUser":
      const user = {
        username: action.payload.username,
        email: action.payload.email,
        id: action.payload.id,
        premium: action.payload.premium,
      };
      return {
        ...prevState,
        userData: user,
      };
    case "logoutUser":
      return {
        ...prevState,
        userData: action.payload,
        userToken: action.payload,
      };
    case "loadToken":
      return { ...prevState, userToken: action.payload };
    case "alertMessage":
      return { ...prevState, alert: action.payload };
    case "deleteRecipe":
      return {
        ...prevState,
        recipes: prevState.recipes.filter(
          (recipe) => recipe.id !== action.payload
        ),
        myFavs: prevState.myFavs.filter(
          (favRecipe) => favRecipe.id !== action.payload
        ),
      };
    case "addRecipe":
      return {
        ...prevState,
        recipes: prevState.recipes.concat(action.payload),
      };
    case "authPremiumUser":
      return {
        ...prevState,
        userData: { ...prevState.userData, premium: action.payload },
      };
    case "addRecipeToFav":
      return {
        ...prevState,
        myFavs: prevState.myFavs.concat(
          prevState.recipes.find((recipe) => recipe.id === action.payload)
        ),
      };
    case "deleteFavRecipe":
      return {
        ...prevState,
        myFavs: prevState.myFavs.filter(
          (favRecipe) => favRecipe.id !== action.payload
        ),
      };
    default:
      return prevState;
  }
}

export default reducer;
