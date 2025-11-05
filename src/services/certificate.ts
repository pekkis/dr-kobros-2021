"use server";

import { CertificationType } from "@/app/certificate-create/page";
import { client } from "@/services/mongo";
import { v4 } from "uuid";
import * as yup from "yup";

const schema = yup.object().shape({
  date: yup.string().min(1).max(20).required(),
  what: yup.string().min(1).max(400).required(),
  who: yup.string().min(1).max(400).required()
});

export const getCertificate = async (
  id: string
): Promise<CertificationType | null> => {
  await client.connect();

  const db = client.db("kobros");
  const collection = db.collection("certifications");

  const cert = await collection.findOne<CertificationType>({ id });

  if (!cert) {
    return null;
  }

  return cert as CertificationType;
};

export const createCertificate = async (
  cert: Omit<CertificationType, "id">
): Promise<CertificationType> => {
  const isValid = await schema.validate(cert);

  if (!isValid) {
    throw new Error("Invalid certificate data");
  }

  const db = client.db("kobros");
  const collection = db.collection("certifications");

  const certificate: CertificationType = {
    id: v4(),
    date: cert.date,
    who: cert.who,
    what: cert.what
  };
  await collection.insertOne(certificate);

  return certificate;
};
