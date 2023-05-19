import Head from "next/head";
import ContentBase from "@/components/ContentBase";
import * as styles from "@/kobro-dollar.css";
import Paragraph from "@/components/content/Paragraph";
import Chart from "./Chart";
import InvestButton from "./InvestButton";

const KobroDollarPage = () => {
  return (
    <>
      <Head>
        <title>
          Kobro$, the centralized crypto currency - Dr. Kobros Foundation
        </title>
      </Head>
      <ContentBase title="Kobro$, the centralized crypto currency">
        <Paragraph>
          Since it&apos;s inception in 2008, the value of our centralized
          blockchain <strong>Kobro$</strong> crypto currency has{" "}
          <em>only gone up</em>. An investment made to the Kobro Dollar Exchange
          is an investment in your future!
        </Paragraph>

        <div className={styles.invest}>
          <InvestButton />
        </div>

        <div className={styles.graph}>
          <h2>Kobro$ / US$ valuation chart, last 120 months</h2>

          <Chart />
        </div>
      </ContentBase>
    </>
  );
};

export default KobroDollarPage;
