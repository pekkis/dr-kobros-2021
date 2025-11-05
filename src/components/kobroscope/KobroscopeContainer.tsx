import Image from "next/image";
import { FC, ReactNode } from "react";
import logo from "@/assets/dr-kobros-logo-large.png";
import Footer from "@/components/Footer";
import * as styles from "./KobroscopeContainer.css";
import MainHeading from "@/components/content/MainHeading";

type Props = {
  title: string;

  children: ReactNode;
};

export const KobroscopeContainer: FC<Props> = ({ title, children }) => {
  return (
    <main className={styles.base}>
      <div className={styles.title}>
        <Image alt="Dr. Kobros" src={logo} priority />
        <MainHeading>{title}</MainHeading>
      </div>

      <div className={styles.kobroscope}>{children}</div>
      <Footer />
    </main>
  );
};
