import { CertificationType } from "@/app/certificate-create/page";
import Certification from "@/components/Certification";
import axios from "axios";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

const getCertificate = cache(
  async (id: string): Promise<CertificationType | null> => {
    try {
      const ret = await axios.get<CertificationType>(
        `${process.env.NEXT_PUBLIC_API}/api/certificate/${id}`
      );

      return ret.data;
    } catch {
      return null;
    }
  }
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
