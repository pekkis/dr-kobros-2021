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

  const title = `Kobroscopes: ${now.toLocaleString(DateTime.DATE_MED)}`;

  return (
    <KobroscopeContainer title={title}>
      <ul>
        {zodiacs.map((zodiac) => {
          return (
            <li key={zodiac}>
              <Link href={`/kobroscope/${date}/${zodiac}`}>{zodiac}</Link>
            </li>
          );
        })}
      </ul>
    </KobroscopeContainer>
  );
};

export default KobroscopeDatePage;
