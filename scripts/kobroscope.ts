import { generateKobroscope } from "@/services/kobroscope";

const ks = await generateKobroscope("Aries");

console.log(ks);
