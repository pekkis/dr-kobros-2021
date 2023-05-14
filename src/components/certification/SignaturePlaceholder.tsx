"use client";

import { FC } from "react";

import * as styles from "./Signature.css";

type Props = {
  signee: string;
  onSign: () => void;
  isSignable: boolean;
};

const SignaturePlaceholder: FC<Props> = ({ onSign, signee, isSignable }) => {
  return (
    <div className={styles.container}>
      <div className={styles.signature}>
        <button disabled={!isSignable} onClick={onSign}>
          sign
        </button>
      </div>
      {signee}
    </div>
  );
};

export default SignaturePlaceholder;
