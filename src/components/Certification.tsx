import { DateTime } from "luxon";
import { FC, useMemo } from "react";

import CertificationBase from "../components/CertificationBase";
import { CertificationType } from "../pages/certificate-create";
import GaylordSignature from "./certification/GaylordSignature";
import RagnarSignature from "./certification/RagnarSignature";
import Header from "./certification/Header";
import ThisIsToCertify from "./certification/ThisIsToCertify";
import Padder from "./certification/Padder";
import Signatures from "./certification/Signatures";
import Verification from "./certification/Verification";

type Props = {
  certificate: CertificationType;
};

const Certification: FC<Props> = ({ certificate }) => {
  const d = useMemo(
    () =>
      DateTime.fromISO(certificate.date)
        .setLocale("en")
        .toLocaleString(DateTime.DATE_MED),
    [certificate.date]
  );

  return (
    <CertificationBase>
      <Header />

      <Padder>
        <ThisIsToCertify
          when={d}
          who={certificate.who}
          what={certificate.what}
        />

        <Signatures>
          <RagnarSignature />
          <GaylordSignature />
        </Signatures>

        <Verification>
          <strong>Verification URL:</strong> {process.env.NEXT_PUBLIC_URL}
          /certificate/
          {certificate.id}
        </Verification>
      </Padder>
    </CertificationBase>
  );
};

export default Certification;
