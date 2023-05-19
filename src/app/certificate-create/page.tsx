import { Metadata } from "next";
import CreateCertificate from "@/components/CreateCertificate";

export type CertificationType = {
  date: string;
  who: string;
  what: string;
  id?: string;
};

export const metadata: Metadata = {
  title: "Get Certified! - Certification Program - Dr. Kobros Foundation",
  description:
    "An industry-wide standard and a measure of distinction that employers use to evaluate prospective employees."
};

const CertificationCreate = () => {
  return <CreateCertificate />;
};

export default CertificationCreate;
