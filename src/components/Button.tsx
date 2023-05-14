import { ComponentProps, FC, useEffect } from "react";
import * as styles from "./Button.css";

const Button: FC<ComponentProps<"button">> = (props) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const tussi = window.matchMedia("(prefers-reduced-motion)");

    console.log(tussi);
  }, []);

  return <button {...props} className={styles.button} />;
};

export default Button;
