/** @jsxImportSource theme-ui */

import Head from "next/head";
import Image from "next/image";
import { Box, Container } from "theme-ui";
import logo from "../../assets/dr-kobros-logo-large.png";
import { useRouter } from "next/router";
import RecommendationBase from "../../components/RecommendationBase";

export default function Recommendation() {
  const router = useRouter();

  const r = `Dr. Kobros recommends ${router.query.what}`;

  return (
    <RecommendationBase>
      <Head>
        <title>{r}</title>
        <meta name="description" content={r} />
      </Head>
      <Box m={3}>Dr. Kobros recommends {router.query.what}</Box>
    </RecommendationBase>
  );
}
