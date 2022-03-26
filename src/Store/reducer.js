import { initialState } from "./initialState";

function reducer(prevState = initialState, action) {
  switch (action.type) {
    case "loadRecipes":
      return { ...prevState, recipes: action.payload };
    case "loadUser":
      return { ...prevState, userData: action.payload };
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
    default:
      return prevState;
  }
}

export default reducer;
