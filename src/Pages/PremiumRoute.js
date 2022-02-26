import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

export default function PremiumRoute({ children }) {
  const auth = useAuth();
  const { user } = auth;
  return user?.premium ? children : <Navigate to="/plans" />;
}
