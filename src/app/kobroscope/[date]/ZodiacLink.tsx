import { iconClass, zodiacClass } from "@/app/kobroscope/[date]/ZodiacLink.css";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons/lib";

type Props = {
  zodiac: string;
  date: string;
  Icon: IconType;
};

export const ZodiacLink: FC<Props> = ({ date, zodiac, Icon }) => {
  return (
    <Link
      className={zodiacClass}
      key={zodiac}
      href={`/kobroscope/${date}/${zodiac}`}
    >
      <Icon className={iconClass} />
      {zodiac}
    </Link>
  );
};
