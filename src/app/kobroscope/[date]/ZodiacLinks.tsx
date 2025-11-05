import { ZodiacLink } from "@/app/kobroscope/[date]/ZodiacLink";
import { navClass } from "@/app/kobroscope/[date]/ZodiacLinks.css";
import { Zodiac, zodiacs } from "@/services/kobroscope";
import { FC } from "react";
import { IconType } from "react-icons/lib";
import {
  TbZodiacAquarius,
  TbZodiacAries,
  TbZodiacCancer,
  TbZodiacCapricorn,
  TbZodiacGemini,
  TbZodiacLeo,
  TbZodiacLibra,
  TbZodiacPisces,
  TbZodiacSagittarius,
  TbZodiacScorpio,
  TbZodiacTaurus,
  TbZodiacVirgo
} from "react-icons/tb";

const iconMap: Record<Zodiac, IconType> = {
  aquarius: TbZodiacAquarius,
  aries: TbZodiacAries,
  cancer: TbZodiacCancer,
  capricorn: TbZodiacCapricorn,
  gemini: TbZodiacGemini,
  leo: TbZodiacLeo,
  libra: TbZodiacLibra,
  pisces: TbZodiacPisces,
  sagittarius: TbZodiacSagittarius,
  scorpio: TbZodiacScorpio,
  taurus: TbZodiacTaurus,
  virgo: TbZodiacVirgo
};

type Props = {
  date: string;
};

export const ZodiacLinks: FC<Props> = ({ date }) => {
  return (
    <nav className={navClass}>
      {zodiacs.map((zodiac) => {
        const Icon = iconMap[zodiac];

        return (
          <ZodiacLink
            Icon={Icon}
            key={zodiac}
            date={date}
            zodiac={zodiac}
          ></ZodiacLink>
        );
      })}
    </nav>
  );
};
