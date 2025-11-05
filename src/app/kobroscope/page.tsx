import { DateTime } from "luxon";
import { redirect } from "next/navigation";
import { FC } from "react";

const KobroscopePage: FC = () => {
  const now = DateTime.now().setZone("Europe/Oslo");
  redirect(`/kobroscope/${now.toISODate()}`);
};

export default KobroscopePage;
