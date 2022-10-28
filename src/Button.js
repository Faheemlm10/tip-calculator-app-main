import React, { useState } from "react";

function Button(props) {
  const [isActive, setActive] = useState(false);
  const handler = () => {
    props.function();
    setActive(!isActive);
  };

  return (
    <button
      onClick={handler}
      className={isActive ? "option-click   " : "option"}
    >
      {props.children}
    </button>
  );
}

export default Button;
