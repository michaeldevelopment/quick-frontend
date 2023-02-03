import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useHandleModal(text, isUserValid) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClickFunction = () =>
    navigate(`${Boolean(isUserValid) ? "/login" : "/signup"}`);
  text === "free" && setShow(true);

  return {
    handleClickFunction,
    show,
    setShow,
  };
}
