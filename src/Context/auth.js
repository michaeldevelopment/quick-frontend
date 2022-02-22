import { useState, useCallback, useMemo, createContext } from "react";
import { getUser } from "../Session/dataUser";

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());
  const [allRecipes, setAllRecipes] = useState();

  const loginUser = (username, email, id, premium) => {
    setUser({
      username,
      email,
      id,
      premium,
    });
  };

  const setPremiumUser = (premium) => {
    setUser({ ...user, premium });
  };

  const addAllRecipes = (recipes) => {
    setAllRecipes(recipes);
  };

  const addRecipes = (recipe) => {
    const newAllRecipes = [...allRecipes, recipe];
    setAllRecipes(newAllRecipes);
  };

  const logoutUser = useCallback(() => {
    setUser(null);
    localStorage.clear();
  }, []);

  const contextValue = useMemo(
    () => ({
      allRecipes,
      user,
      loginUser,
      logoutUser,
      setPremiumUser,
      addRecipes,
      addAllRecipes,
    }),
    [
      allRecipes,
      user,
      loginUser,
      logoutUser,
      setPremiumUser,
      addRecipes,
      addAllRecipes,
    ]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
