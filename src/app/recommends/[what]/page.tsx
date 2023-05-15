import RecommendationBase from "@/components/RecommendationBase";
import { Metadata } from "next";

type Props = {
  params: {
    what: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Dr. Kobros recommends ${decodeURIComponent(params.what)}`
  };
}

export default function Recommendation({ params }: Props) {
  return (
    <RecommendationBase>{decodeURIComponent(params.what)}</RecommendationBase>
  );
}
