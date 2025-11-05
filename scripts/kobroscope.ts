import "dotenv/config";

import { createDailyKobroscopes } from "@/workflow/dailyKobroscopes";
import { DateTime } from "luxon";

const now = DateTime.now();

const ks = await createDailyKobroscopes(now.toISODate());

console.log("KS", ks);

process.exit(0);
