import { FC, ReactNode } from "react";
import * as styles from "./Padder.css";

type Props = {
  children: ReactNode;
};

const Padder: FC<Props> = ({ children }) => {
  return <div className={styles.padder}>{children}</div>;
};

export default Padder;
