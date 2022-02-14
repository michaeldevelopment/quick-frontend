import { useState, useCallback, useMemo, createContext } from "react";
import { getUser } from "../Session/dataUser";

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());

  const loginUser = (username, email, id) => {
    setUser({
      username,
      email,
      id,
    });
  };

  const logoutUser = useCallback(() => {
    setUser(null);
    localStorage.clear();
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      loginUser,
      logoutUser,
    }),
    [user, loginUser, logoutUser]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
