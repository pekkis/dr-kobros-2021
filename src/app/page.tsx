import * as styles from "./page.css";
import kobros from "../assets/dr-kobros-logo-large.png";
import Image from "next/image";
import cx from "clsx";

import {
  FaBitcoin,
  FaCertificate,
  FaThumbsUp,
  FaLightbulb
} from "react-icons/fa";
import { TbZodiacCancer } from "react-icons/tb";
import Link from "next/link";
import KobroMenu from "@/components/KobroMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Kobros, The Snake Oil Company"
};

export default function IndexPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            priority
            src={kobros}
            alt="Dr. Kobros Corporate Logo"
            width={200}
            height={200}
          />

          <h1 className={styles.heading}>Dr. Kobros</h1>
          <div className={styles.slogan}>The Snake Oil Company</div>

          <nav className={styles.flexxerContainer}>
            <div className={styles.flexxerItem}>
              <div className={styles.flexxerIcon}>
                <FaThumbsUp />
              </div>
              <Link className={styles.link} href="/recommends">
                Recommends
              </Link>
            </div>
            <div className={styles.flexxerItem}>
              <div className={styles.flexxerIcon}>
                <FaCertificate />
              </div>
              <Link className={styles.link} href="/certificate">
                Certifications
              </Link>
            </div>
            <div className={styles.flexxerItem}>
              <div className={styles.flexxerIcon}>
                <FaBitcoin />
              </div>
              <Link className={styles.link} href="/kobro-dollar">
                Kobro$ crypto currency
              </Link>
            </div>

            <div className={cx(styles.flexxerItem)}>
              <div className={styles.flexxerIcon}>
                <TbZodiacCancer />
              </div>
              <Link className={styles.link} href="/kobroscope">
                Kobroscope
              </Link>
            </div>
          </nav>
        </div>
      </main>

      <footer className={styles.footer}>
        <KobroMenu nav={false} />
      </footer>
    </>
  );
}
