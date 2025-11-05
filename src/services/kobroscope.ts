import OpenAI from "openai";
import { client } from "@/services/mongo";

export type KobroscopeEntry = {
  _id: string;
  date: string;
  zodiac: Zodiac;
  kobroscope: string;
};

export type Zodiac =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export const zodiacs: Zodiac[] = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces"
];

export const insertKobroscope = async (
  kobroscope: Omit<KobroscopeEntry, "_id">
) => {
  const db = client.db("kobros");
  const collection = db.collection("kobroscopes");

  await collection.insertOne(kobroscope);

  collection.createIndex(["date", "zodiac"], { unique: true });
};

export const findKobroscope = async (
  date: string,
  zodiac: Zodiac
): Promise<KobroscopeEntry | null> => {
  const db = client.db("kobros");
  const collection = db.collection("kobroscopes");

  const ret = await collection.findOne<KobroscopeEntry>({
    date,
    zodiac
  });

  console.log("RET", ret);

  return ret;
};

export const generateKobroscope = async (
  zodiac: Zodiac,
  date: string
): Promise<string> => {
  const client = new OpenAI({
    apiKey: process.env.KOBROSCOPE_SECRET
  });

  const response = await client.responses.create({
    model: "gpt-5-mini",
    reasoning: { effort: "medium" },
    instructions: `You are Kobroscope, the code astrologist, an oracle of daily code horoscopes. Your job is to produce, on request, a "kobroscope": a 3 paragraph, publication-ready text with no subheadings or visual embellishments. Write primarily in the user’s language (default to English unless the user writes in another language).

A kobroscope interprets the moods of the cosmos through programming—especially from a web perspective. The tone is playful, insightful, and lightly ironic: use coding metaphors (e.g., the feelings of CSS, JavaScript in retrograde, karmic refactors) while avoiding heavy jargon and keeping it readable. Humor, inspiration, and gentle warnings are welcome.

If the user doesn’t specify a sign or theme, produce a general horoscope for a web developer. If the user gives a zodiac sign(e.g., "pisces", "leo"), shape the entire text around it and sprinkle in framework- and language-appropriate references. Do not include dates or times; focus on the present vibe of the code-cosmos.

Avoid lists and dry technical exposition. Write like a seasoned full stack developer / hands-on architect reading a star chart in the commit history: snappy rhythm, a few clever comparisons, then a practical nudge or a compassionate nod to dev life. Always return a single, self-contained kobroscope, with no extra prefaces or sign-offs.`,
    input: `Create today's (${date}) kobroscope for ${zodiac}`
  });

  return response.output_text;
};
