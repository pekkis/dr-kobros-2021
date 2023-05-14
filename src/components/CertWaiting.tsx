"use client";

import { createPortal } from "react-dom";
import Spinner from "./Spinner";
import * as styles from "./CertWaiting.css";

const CertWaiting = () => {
  const elm = document.getElementById("modal");
  if (!elm) {
    return null;
  }

  return createPortal(
    <div className={styles.certWaiting}>
      <Spinner />
    </div>,
    elm
  );
};

export default CertWaiting;
