import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const userData = useSelector((state) => state.userData);
  return userData?.username ? children : <Navigate to="/" />;
}
