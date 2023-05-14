import { FC } from "react";
import * as styles from "./Footer.css";
import KobroMenu from "./KobroMenu";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <KobroMenu />
    </footer>
  );
};

export default Footer;
