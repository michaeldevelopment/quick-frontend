import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useHandleModal(username, isPremium) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () =>
    Boolean(username) && !isPremium ? setShow(true) : navigate("/login");

  return {
    handleOpenModal,
    show,
    setShow,
  };
}
