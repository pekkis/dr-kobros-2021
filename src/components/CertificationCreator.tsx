import axios from "axios";
import { DateTime } from "luxon";
import { useRouter } from "next/navigation";
import {
  FC,
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
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

type Props = {
  certificate: CertificationType;
  setCertificate: (cert: CertificationType) => void;
};

const CertificationCreator: FC<Props> = ({ certificate, setCertificate }) => {
  const [gaylordSigned, setGaylordSigned] = useState<boolean>(false);
  const [ragnarSigned, setRagnarSigned] = useState<boolean>(false);

  const [submitting, setSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const d = useMemo(
    () =>
      DateTime.fromISO(certificate.date)
        .setLocale("en")
        .toLocaleString(DateTime.DATE_MED),
    [certificate.date]
  );

  const setWho = useCallback(
    (who: string) => {
      setCertificate({
        ...certificate,
        who
      });
    },
    [certificate, setCertificate]
  );

  const setWhat = useCallback(
    (what: string) => {
      setCertificate({
        ...certificate,
        what
      });
    },
    [certificate, setCertificate]
  );

  useEffect(() => {
    if (!gaylordSigned || !ragnarSigned) {
      return;
    }

    startTransition(() => {
      setSubmitting(true);
    });

    axios
      .post<CertificationType>(
        `${process.env.NEXT_PUBLIC_API}/api/certificate`,
        certificate
      )
      .then((ret) => ret.data)
      .then((cert) => {
        router.push(`/certificate/${cert.id}`);
      });
  }, [gaylordSigned, ragnarSigned, certificate, router]);

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
              }}
            ></SignaturePlaceholder>
          )}
        </Signatures>
      </Padder>
    </CertificationBase>
  );
};

export default CertificationCreator;
