"use client";

import classNames from "classnames";
import { useTheme } from "../../contexts/Theme";
import { Button } from "../Button/component";
import styles from "./styles.module.css";

export const Header = ({className}) => {
  const { theme, switchTheme } = useTheme();
  return <header className={classNames(styles.root, className, `theme_${theme}`)}>
    <div className={classNames(styles['titleContainer'])}>
      <h1>Welcome!</h1>
    </div>
    <div className={classNames(styles['themeSwitcherContainer'])}>
      <Button onClick={switchTheme}>Switch theme</Button>
    </div>
  </header>
}
