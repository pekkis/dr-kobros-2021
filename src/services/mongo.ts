import { MongoClient, ServerApiVersion, type Collection } from "mongodb";
import type { CertificationType } from "@/app/certificate-create/page";

// Created on first use, not at import: `next build` loads the routes without a database.
let client: MongoClient | undefined;

const getClient = (): MongoClient => {
  if (!client) {
    const url = process.env.MONGO;
    if (!url) {
      throw new Error("MONGO is not set");
    }
    client = new MongoClient(url, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
      }
    });
  }
  return client;
};

export const certifications = (): Collection<CertificationType> =>
  getClient().db("kobros").collection<CertificationType>("certifications");
