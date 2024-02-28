"use client";

import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import styles from "./styles.module.css";

export const Button = ({children, onClick, className, type, size, form, disabled}) => {
  const {theme} = useContext(ThemeContext);

  return <button
      className={classNames(
        className,
        styles.root,
        styles[type],
        styles[size],
        styles[form],
        `theme_${theme}`,
      )}
      onClick={onClick}
      disabled={disabled}
  >
    {children}
  </button>
}
