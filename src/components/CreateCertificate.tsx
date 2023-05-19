"use client";

import { DateTime } from "luxon";
import { FC, useState } from "react";
import Certification from "./CertificationCreator";

const CreateCertificate: FC = () => {
  const [certificate, setCertificate] = useState({
    date: DateTime.local().toFormat("yyyy-LL-dd"),
    who: "",
    what: ""
  });

  return (
    <>
      <Certification
        certificate={certificate}
        setCertificate={setCertificate}
      />
    </>
  );
};

export default CreateCertificate;
