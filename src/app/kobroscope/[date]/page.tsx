import { ZodiacLink } from "@/app/kobroscope/[date]/ZodiacLink";
import { ZodiacLinks } from "@/app/kobroscope/[date]/ZodiacLinks";
import { KobroscopeContainer } from "@/components/kobroscope/KobroscopeContainer";
import { zodiacs } from "@/services/kobroscope";
import { DateTime } from "luxon";
import Link from "next/link";
import { FC } from "react";

type Props = {
  params: Promise<{
    date: string;
    zodiac: string;
  }>;
};

const KobroscopeDatePage: FC<Props> = async ({ params }) => {
  const { date } = await params;

  const now = DateTime.fromISO(date);

  const title = `Kobroscope: ${now.toLocaleString(DateTime.DATE_MED)}`;

  return (
    <KobroscopeContainer title={title}>
      <ZodiacLinks date={date} />
    </KobroscopeContainer>
  );
};

export default KobroscopeDatePage;
