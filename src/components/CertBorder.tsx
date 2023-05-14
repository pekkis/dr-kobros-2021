import { FC, ReactNode } from "react";
import * as styles from "./CertBorder.css";

type Props = {
  children: ReactNode;
};

const CertBorder: FC<Props> = ({ children }) => {
  return <div className={styles.certBorder}>{children}</div>;
};

export default CertBorder;
