import { FC, ReactNode } from "react";
import CertBorder from "../components/CertBorder";
import Footer from "./Footer";
import * as styles from "./CertificationBase.css";

type Props = {
  children: ReactNode;
};

const CertificationBase: FC<Props> = ({ children }) => {
  return (
    <main className={styles.base}>
      <CertBorder>{children}</CertBorder>

      <Footer />
    </main>
  );
};

export default CertificationBase;
