import { KobroscopeContainer } from "@/components/kobroscope/KobroscopeContainer";
import { Markdown } from "@/components/Markdown";
import { findKobroscope, Zodiac } from "@/services/kobroscope";
import { DateTime } from "luxon";
import { notFound } from "next/navigation";
import { FC } from "react";

type Props = {
  params: Promise<{
    date: string;
    zodiac: string;
  }>;
};

const KobroscopeDateZodiacPage: FC<Props> = async ({ params }) => {
  const { date, zodiac } = await params;

  const kobroscope = await findKobroscope(date, zodiac as Zodiac);

  if (!kobroscope) {
    notFound();
  }

  const now = DateTime.fromISO(date);

  const title = `Kobroscope: ${now.toLocaleString(DateTime.DATE_MED)}, ${zodiac}`;

  return (
    <KobroscopeContainer title={title}>
      <Markdown>{kobroscope.kobroscope}</Markdown>
    </KobroscopeContainer>
  );
};

export default KobroscopeDateZodiacPage;
