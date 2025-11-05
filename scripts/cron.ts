import "dotenv/config";

import { CronJob } from "cron";
import { createDailyKobroscopes } from "@/workflow/dailyKobroscopes";
import { DateTime } from "luxon";

const job = new CronJob(
  "0 0 2 * * *", // cronTime
  async function () {
    const now = DateTime.now();

    const ks = await createDailyKobroscopes(now.toISODate());

    console.log("KS", ks);
  }, // onTick
  null, // onComplete
  false, // start
  "America/Los_Angeles" // timeZone
);

job.start();
