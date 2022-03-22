export const loginUser = (username, email, id) => ({
  type: "loginUser",
  payload: [username, email, id],
});

export const logOut = () => ({
  type: "logOut",
  payload: null,
});

export const loadRecipes = (recipes) => ({
  type: "loadRecipes",
  payload: recipes,
});
