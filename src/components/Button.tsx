"use client";

import { ComponentProps, FC } from "react";
import * as styles from "./Button.css";

const Button: FC<ComponentProps<"button">> = (props) => {
  return <button {...props} className={styles.button} />;
};

export default Button;
