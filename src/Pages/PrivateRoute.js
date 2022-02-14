import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

export default function PrivateRoute({ children }) {
  const auth = useAuth();
  const { user } = auth;
  return user?.username ? <Navigate to="/" /> : children;
}
