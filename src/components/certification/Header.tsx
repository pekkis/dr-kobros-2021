import { FC } from "react";
import * as styles from "./Header.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>The Dr. Kobros Foundation</h1>
      <h2 className={styles.subHeading}>Dr. Kobros vei, Nordbyhagen, Norway</h2>
    </header>
  );
};

export default Header;
