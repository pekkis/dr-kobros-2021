import Image from "next/image";
import { FC, ReactNode } from "react";
import logo from "../assets/dr-kobros-logo-large.png";
import Footer from "./Footer";
import MainHeading from "./content/MainHeading";
import * as styles from "./ContentBase.css";

type Props = {
  title: string;
  children: ReactNode;
};

const ContentBase: FC<Props> = ({ children, title }) => {
  return (
    <main className={styles.base}>
      <div className={styles.title}>
        <Image alt="Dr. Kobros" src={logo} priority />
        <MainHeading>{title}</MainHeading>
      </div>

      {children}

      <Footer />
    </main>
  );
};

export default ContentBase;
