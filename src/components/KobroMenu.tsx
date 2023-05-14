import Link from "../components/Link";
import * as styles from "./KobroMenu.css";

const KobroMenu = () => {
  return (
    <div className={styles.kobroMenu}>
      Dr. Kobros® is a registered trademark of the{" "}
      <Link href="/foundation">Dr. Kobros Foundation</Link>. All rights
      reserved.
      <nav>
        <Link href="/">Dr. Kobros recommends</Link>
        {" | "}
        <Link href="/certificate">Dr. Kobros Certifications</Link>
        {" | "}
        <Link href="/kobro-dollar">Kobro$</Link>
        {" | "}
        <Link href="/kobro-ai">Kobro AI</Link>
      </nav>
    </div>
  );
};

export default KobroMenu;
