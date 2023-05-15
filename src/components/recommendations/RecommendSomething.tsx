"use client";

import { FC } from "react";
import RecommendationBase from "@/components/RecommendationBase";
import Input from "@/components/recommendations/Input";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RecommendSomething: FC = () => {
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
      <Input
        value={recommends}
        onChange={(e) => setRecommends(e.target.value)}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            submitRecommendation();
          }
        }}
        onBlur={() => submitRecommendation()}
      />
    </RecommendationBase>
  );
};

export default RecommendSomething;
