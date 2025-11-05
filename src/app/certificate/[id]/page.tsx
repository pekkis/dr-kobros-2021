import Certification from "@/components/Certification";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

import * as certificateService from "@/services/certificate";

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

const getCertificate = cache(certificateService.getCertificate);

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
