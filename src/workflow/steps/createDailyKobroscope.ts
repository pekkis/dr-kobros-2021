import {
  findKobroscope,
  generateKobroscope,
  insertKobroscope,
  Zodiac
} from "@/services/kobroscope";

export async function createDailyKobroscope(
  zodiac: Zodiac,
  date: string
): Promise<boolean> {
  const alreadyCreated = await findKobroscope(date, zodiac);

  if (alreadyCreated) {
    return false;
  }

  const kobroscope = await generateKobroscope(zodiac, date);

  await insertKobroscope({
    zodiac,
    kobroscope,
    date
  });

  return true;
}
