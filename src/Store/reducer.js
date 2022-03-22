import { initialState } from "./initialState";

function reducer(prevState = initialState, action) {
  switch (action.type) {
    case "loadRecipes":
      return { ...prevState, recipes: action.payload };
    default:
      return prevState;
  }
}

export default reducer;
