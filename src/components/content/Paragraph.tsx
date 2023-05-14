import { ComponentProps, FC } from "react";
import * as styles from "./Paragraph.css";

const Paragraph: FC<ComponentProps<"p">> = ({ children, ...props }) => {
  return (
    <p {...props} className={styles.paragraph}>
      {children}
    </p>
  );
};

export default Paragraph;
