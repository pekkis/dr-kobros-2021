import Image from "next/image";
import { FC, ReactNode } from "react";
import logo from "../assets/dr-kobros-logo-large.png";
import Footer from "./Footer";
import * as styles from "./RecommendationBase.css";

type Props = {
  children: ReactNode;
};

const RecommendationBase: FC<Props> = ({ children }) => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.flex}>
          <div className={styles.centerer}>
            <div className={styles.image}>
              <Image src={logo} alt="Dr. Kobros Foundation" priority />
            </div>
            <div className={styles.childrenContainer}>
              <div className={styles.what}>
                Dr. Kobros recommends {children}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default RecommendationBase;
