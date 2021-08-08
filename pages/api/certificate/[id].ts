// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CertificationType } from "../../certificate-create";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CertificationType | {}>
) {
  await client.connect();

  const db = client.db("kobros");
  const collection = db.collection("certifications");

  const cert = await collection.findOne({ id: req.query.id });

  if (!cert) {
    return res.status(404).json({});
  }

  res.status(200).json(cert);
}
