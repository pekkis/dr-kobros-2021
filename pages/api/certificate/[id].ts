import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

const client = new MongoClient(process.env.MONGO as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
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
