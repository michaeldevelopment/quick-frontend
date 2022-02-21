import { useState, useCallback, useMemo, createContext } from "react";
import { getUser } from "../Session/dataUser";

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());

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

  const logoutUser = useCallback(() => {
    setUser(null);
    localStorage.clear();
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      loginUser,
      logoutUser,
      setPremiumUser,
    }),
    [user, loginUser, logoutUser, setPremiumUser]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
