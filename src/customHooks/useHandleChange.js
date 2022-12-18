import React, { useState } from "react";

export default function useHandleChange() {
  const [handleInputs, setHandleInputs] = useState([]);

  const onChange = ({ target }) => {
    setHandleInputs({ ...handleInputs, [target.name]: target.value });
  };

  return { onChange, handleInputs, setHandleInputs };
}
