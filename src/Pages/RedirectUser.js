import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RedirectUser({ children }) {
  const userData = useSelector((state) => state.userData);
  return userData?.username ? <Navigate to="/" /> : children;
}
