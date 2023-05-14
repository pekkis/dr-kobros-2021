import { FC, ReactNode } from "react";

import * as styles from "./ThisIsToCertify.css";

type Props = {
  when: string;
  what: ReactNode;
  who: ReactNode;
};

const ThisIsToCertify: FC<Props> = ({ when, who, what }) => {
  return (
    <>
      <div className={styles.explain}>This is to certify that on {when}</div>
      <div className={styles.namer}>{who}</div>
      <div className={styles.explain}>
        Successfully passed the Examination for the Certificate
      </div>
      <div className={styles.namer}>{what}</div>
    </>
  );
};

export default ThisIsToCertify;
