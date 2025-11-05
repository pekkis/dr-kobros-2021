import "dotenv/config";

import { createDailyKobroscope } from "@/workflow/steps/createDailyKobroscope";

export async function createDailyKobroscopes(date: string) {
  console.log("GENERATING...");

  await createDailyKobroscope("aquarius", date);
  await createDailyKobroscope("aries", date);
  await createDailyKobroscope("cancer", date);
  await createDailyKobroscope("capricorn", date);
  await createDailyKobroscope("gemini", date);
  await createDailyKobroscope("leo", date);
  await createDailyKobroscope("libra", date);
  await createDailyKobroscope("pisces", date);
  await createDailyKobroscope("sagittarius", date);
  await createDailyKobroscope("scorpio", date);
  await createDailyKobroscope("taurus", date);
  await createDailyKobroscope("virgo", date);

  console.log("GENERATED...");
  return true;
}
