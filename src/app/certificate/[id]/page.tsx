import { CertificationType } from "@/app/certificate-create/page";
import Certification from "@/components/Certification";
import { certifications } from "@/services/mongo";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

// Read straight from the database: a server component needs no HTTP round trip to its own API.
// _id (an ObjectId) is left out, since only plain values can be passed to client components.
const getCertificate = cache(
  async (id: string): Promise<CertificationType | null> =>
    certifications().findOne({ id }, { projection: { _id: 0 } })
);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const cert = await getCertificate(id);
  if (!cert) {
    notFound();
  }

  return {
    title: `Certificate ${cert.id} - Certification Program - Dr. Kobros`
  };
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CertificationViewPage({ params }: Props) {
  const { id } = await params;

  const cert = await getCertificate(id);
  if (!cert) {
    notFound();
  }

  return (
    <>
      <Certification certificate={cert} />
    </>
  );
}
