/** @jsxImportSource theme-ui */

import Head from "next/head";
import Image from "next/image";
import { Box, Container } from "theme-ui";
import logo from "../../assets/dr-kobros-logo-large.png";
import { useRouter } from "next/router";
import RecommendationBase from "../../components/RecommendationBase";

export default function Recommendation() {
  const router = useRouter();

  return (
    <RecommendationBase>
      <Head>
        <title>Dr. Kobros Foundation</title>
        <meta name="description" content="Dr. Kobros Foundation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box m={3}>Dr. Kobros recommends {router.query.what}</Box>
    </RecommendationBase>
  );
}
