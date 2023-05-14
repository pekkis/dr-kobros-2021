import { FC, ReactNode } from "react";
import * as styles from "./SubHeading.css";

type Props = {
  children: ReactNode;
};

const SubHeading: FC<Props> = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default SubHeading;
