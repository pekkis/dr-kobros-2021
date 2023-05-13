/** @jsxImportSource theme-ui */

import { Input } from "theme-ui";

import { useRouter } from "next/router";
import { useState } from "react";
import RecommendationBase from "../components/RecommendationBase";

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
          fontFamily: "Edmunds"
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
