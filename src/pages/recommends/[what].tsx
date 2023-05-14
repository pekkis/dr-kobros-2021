import Head from "next/head";
import { useRouter } from "next/router";
import RecommendationBase from "../../components/RecommendationBase";
import * as styles from "../../[what].css";

export default function Recommendation() {
  const router = useRouter();

  const r = `Dr. Kobros recommends ${router.query.what}`;

  return (
    <RecommendationBase>
      <Head>
        <title>{r}</title>
        <meta name="description" content={r} />
      </Head>
      <div className={styles.what}>
        Dr. Kobros recommends {router.query.what}
      </div>
    </RecommendationBase>
  );
}
