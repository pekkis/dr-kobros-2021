import { MongoClient, ServerApiVersion } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import * as yup from "yup";
import { CertificationType } from "../certificate-create";

const schema = yup.object().shape({
  date: yup.string().min(1).max(20).required(),
  what: yup.string().min(1).max(400).required(),
  who: yup.string().min(1).max(400).required()
});

const client = new MongoClient(process.env.MONGO as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CertificationType>
) {
  await client.connect();

  const isValid = await schema.validate(req.body);

  if (!isValid) {
    throw new Error("Invalid certificate data");
  }

  const db = client.db("kobros");
  const collection = db.collection("certifications");

  const certificate: CertificationType = {
    id: v4(),
    date: req.body.date,
    who: req.body.who,
    what: req.body.what
  };

  await collection.insertOne(certificate);

  res.status(200).json(certificate);
}
