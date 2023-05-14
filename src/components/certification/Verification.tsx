import { FC, ReactNode } from "react";
import * as styles from "./Verification.css";

type Props = {
  children: ReactNode;
};

const Verification: FC<Props> = ({ children }) => {
  return <div className={styles.verification}>{children}</div>;
};

export default Verification;
