import { FC, ReactNode } from "react";
import * as styles from "./Signatures.css";

type Props = {
  children: ReactNode;
};

const Signatures: FC<Props> = ({ children }) => {
  return <div className={styles.signatures}>{children}</div>;
};

export default Signatures;
