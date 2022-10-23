import React from "react";

import classNames from "classnames/bind";
import s from "./Button.module.css";

const cx = classNames.bind(s);

const Button = ({ children, onClick, accent, maxSize }) => {
  const classes = cx({
    button: true,
    primary: true,
    maxSize,
    accent,
  });

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
