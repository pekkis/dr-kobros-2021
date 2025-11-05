"use client";

import { DateTime } from "luxon";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import Input from "./certification/Input";
import CertificationBase from "../components/CertificationBase";

import CertWaiting from "./CertWaiting";
import RagnarSignature from "./certification/RagnarSignature";
import SignaturePlaceholder from "./certification/SignaturePlaceholder";
import GaylordSignature from "./certification/GaylordSignature";
import Header from "./certification/Header";
import Padder from "./certification/Padder";
import ThisIsToCertify from "./certification/ThisIsToCertify";
import Signatures from "./certification/Signatures";
import { CertificationType } from "@/app/certificate-create/page";
import { createCertificate } from "@/services/certificate";

type Props = {
  certificate: CertificationType;
  setCertificate: (cert: CertificationType) => void;
};

const CertificationCreator: FC<Props> = ({ certificate, setCertificate }) => {
  const [gaylordSigned, setGaylordSigned] = useState<boolean>(false);
  const [ragnarSigned, setRagnarSigned] = useState<boolean>(false);

  const [submitting, setSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const d = DateTime.fromISO(certificate.date)
    .setLocale("en")
    .toLocaleString(DateTime.DATE_MED);

  const setWho = (who: string) => {
    setCertificate({
      ...certificate,
      who
    });
  };

  const setWhat = (what: string) => {
    setCertificate({
      ...certificate,
      what
    });
  };

  const submit = () => {
    createCertificate(certificate).then((cert) => {
      router.push(`/certificate/${cert.id}`);
    });
  };

  return (
    <CertificationBase>
      {submitting && <CertWaiting />}
      <Header />
      <Padder>
        <ThisIsToCertify
          when={d}
          who={
            <Input
              disabled={ragnarSigned && gaylordSigned}
              placeholder="Your name here"
              value={certificate.who}
              onChange={(e) => setWho(e.target.value)}
            />
          }
          what={
            <Input
              disabled={ragnarSigned && gaylordSigned}
              placeholder="Certificate name here"
              value={certificate.what}
              onChange={(e) => setWhat(e.target.value)}
            />
          }
        />

        <Signatures>
          {ragnarSigned ? (
            <RagnarSignature />
          ) : (
            <SignaturePlaceholder
              isSignable={Boolean(certificate.what && certificate.who)}
              signee="Ragnar Kobros, Chairman"
              onSign={() => {
                setRagnarSigned(true);
                if (gaylordSigned) {
                  setSubmitting(true);
                  submit();
                }
              }}
            ></SignaturePlaceholder>
          )}
          {gaylordSigned ? (
            <GaylordSignature />
          ) : (
            <SignaturePlaceholder
              isSignable={Boolean(certificate.what && certificate.who)}
              signee="Gaylord L. Lohiposki, interim CEO"
              onSign={() => {
                setGaylordSigned(true);
                if (ragnarSigned) {
                  setSubmitting(true);
                  submit();
                }
              }}
            ></SignaturePlaceholder>
          )}
        </Signatures>
      </Padder>
    </CertificationBase>
  );
};

export default CertificationCreator;
