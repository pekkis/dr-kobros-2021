import { FC } from "react";
import Link from "../components/Link";
import * as styles from "./KobroMenu.css";

type Props = {
  nav?: boolean;
};

const KobroMenu: FC<Props> = ({ nav = true }) => {
  return (
    <div className={styles.kobroMenu}>
      Dr. Kobros® is a registered trademark of the{" "}
      <Link href="/foundation">Dr. Kobros Foundation</Link>. All rights
      reserved.
      {nav && (
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/recommends">Dr. Kobros recommends</Link>
          {" | "}
          <Link href="/certificate">Dr. Kobros Certifications</Link>
          {" | "}
          <Link href="/kobro-dollar">Kobro$</Link>
          {" | "}
          <Link href="/kobroscope">Kobro AI</Link>
        </nav>
      )}
    </div>
  );
};

export default KobroMenu;
