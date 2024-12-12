import RecommendationBase from "@/components/RecommendationBase";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    what: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { what } = await params;

  return {
    title: `Dr. Kobros recommends ${decodeURIComponent(what)}`
  };
}

export default async function Recommendation({ params }: Props) {
  const { what } = await params;

  return <RecommendationBase>{decodeURIComponent(what)}</RecommendationBase>;
}
