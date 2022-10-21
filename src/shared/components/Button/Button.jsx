import React from "react";

import s from "./Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button type="button" className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
