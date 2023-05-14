import { FC } from "react";
import gaylordSignature from "../../assets/signature-gaylord.png";
import * as styles from "./Signature.css";

const GaylordSignature: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signature}>
        <img
          className={styles.gaylord}
          alt="Gaylord L. Lohiposki, interim CEO"
          src={gaylordSignature.src}
        />
      </div>
      Gaylord L. Lohiposki, interim CEO
    </div>
  );
};

export default GaylordSignature;
