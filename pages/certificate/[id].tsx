/** @jsxImportSource theme-ui */

import Certification from "../../components/Certification";
import { FC } from "react";

import { GetServerSideProps } from "next";
import axios from "axios";

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  context.query.id;

  const ret = await axios.get<CertificationType>(
    `${process.env.NEXT_PUBLIC_API}/api/certificate/${context.query.id}`
  );

  return {
    props: {
      certificate: ret.data,
    },
  };
};

export type CertificationType = {
  date: string;
  who: string;
  what: string;
};

type Props = {
  certificate: CertificationType;
};

const CertificationView: FC<Props> = ({ certificate }) => {
  return <Certification certificate={certificate} />;
};

export default CertificationView;
