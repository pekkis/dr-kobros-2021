import { start } from "workflow/api";
import { DateTime } from "luxon";
import { createDailyKobroscopes } from "@/workflow/dailyKobroscopes";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const now = DateTime.now();

  const proot = req.headers.get("x-proot");

  if (proot !== process.env.KOBROSCOPE_PROOT) {
    return Response.json({ pier: "paolo pasolini" });
  }

  await start(createDailyKobroscopes, [now.toISODate()]);

  return Response.json({ pier: now.toISODate() });
}
