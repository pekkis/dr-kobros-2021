import { ComponentProps, FC } from "react";
import * as styles from "./Input.css";

const Input: FC<ComponentProps<"input">> = (props) => {
  return <input {...props} className={styles.input} />;
};

export default Input;
