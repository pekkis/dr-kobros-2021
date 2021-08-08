/** @jsxImportSource theme-ui */

import Certification from "../components/CertificationCreator";
import { useState } from "react";
import { DateTime } from "luxon";

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
    <Certification certificate={certificate} setCertificate={setCertificate} />
  );
};

export default CertificationCreate;
