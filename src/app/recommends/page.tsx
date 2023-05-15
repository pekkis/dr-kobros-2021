import RecommendSomething from "@/components/recommendations/RecommendSomething";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Kobros Foundation"
};

export default function IndexPage() {
  return <RecommendSomething />;
}
