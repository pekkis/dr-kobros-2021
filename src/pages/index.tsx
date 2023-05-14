import { useRouter } from "next/router";
import { useState } from "react";
import RecommendationBase from "../components/RecommendationBase";
import Input from "../components/recommendations/Input";
import { what } from "../[what].css";

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
      <div className={what}>
        Dr. Kobros recommends{" "}
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
      </div>
    </RecommendationBase>
  );
}
