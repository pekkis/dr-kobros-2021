/** @jsxImportSource theme-ui */

import Certification from "../components/CertificationCreator";
import { useState } from "react";
import { DateTime } from "luxon";
import Head from "next/head";

export type CertificationType = {
  date: string;
  who: string;
  what: string;
  id?: string;
};

const CertificationCreate = () => {
  const [certificate, setCertificate] = useState({
    date: DateTime.local().toFormat("yyyy-LL-dd"),
    who: "",
    what: "",
  });

  return (
    <>
      <Head>
        <title>
          Get Certified! - Certification Program - Dr. Kobros Foundation
        </title>
        <meta
          name="description"
          content="An industry-wide standard and a measure of distinction that employers use to evaluate prospective employees."
        />
      </Head>

      <Certification
        certificate={certificate}
        setCertificate={setCertificate}
      />
    </>
  );
};

export default CertificationCreate;
