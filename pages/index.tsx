/** @jsxImportSource theme-ui */

import Head from "next/head";
import Image from "next/image";
import logo from "../assets/dr-kobros-logo-large.png";
import { Box, Container, Flex, Input } from "theme-ui";

import { useState } from "react";
import { useRouter } from "next/router";
import KobroMenu from "../components/KobroMenu";
import RecommendationBase from "../components/RecommendationBase";
import Link from "next/link";

export default function Home() {
  const [recommends, setRecommends] = useState("");
  const router = useRouter();

  const submitRecommendation = () => {
    if (recommends === "") {
      return;
    }

    router.push(`/recommends/${recommends}`);
  };

  return (
    <RecommendationBase>
      Dr. Kobros recommends{" "}
      <Input
        sx={{
          display: "inline-block",
          width: "400px",
          fontFamily: "Edmunds",
        }}
        value={recommends}
        onChange={(e) => setRecommends(e.target.value)}
        onKeyPress={(e) => {
          if (e.code === "Enter") {
            submitRecommendation();
          }
        }}
        onBlur={() => submitRecommendation()}
      />
    </RecommendationBase>
  );
}
