import {
  generateKobroscope,
  insertKobroscope,
  Zodiac
} from "@/services/kobroscope";

export async function createDailyKobroscope(zodiac: Zodiac, date: string) {
  "use step";

  console.log("GENERATING...");
  const kobroscope = await generateKobroscope(zodiac, date);

  console.log("INSERTING...");

  await insertKobroscope({
    zodiac,
    kobroscope,
    date
  });
}
