import { FC } from "react";
import ragnarSignature from "../../assets/signature-kobros.png";
import * as styles from "./Signature.css";

const RagnarSignature: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signature}>
        <img
          className={styles.ragnar}
          alt="Ragnar Kobros, Chairman"
          src={ragnarSignature.src}
        />
      </div>
      Ragnar Kobros, Chairman
    </div>
  );
};

export default RagnarSignature;
