import { useContext } from "react";
import { UserContext } from "./auth";

export function useAuth() {
  const user = useContext(UserContext);
  return user;
}
