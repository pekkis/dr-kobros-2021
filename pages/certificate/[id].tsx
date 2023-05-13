/** @jsxImportSource theme-ui */

import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
import Certification from "../../components/Certification";

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  context.query.id;

  const ret = await axios.get<CertificationType>(
    `${process.env.NEXT_PUBLIC_API}/api/certificate/${context.query.id}`
  );

  return {
    props: {
      certificate: ret.data
    }
  };
};

export type CertificationType = {
  id?: string;
  date: string;
  who: string;
  what: string;
};

type Props = {
  certificate: CertificationType;
};

const CertificationView: FC<Props> = ({ certificate }) => {
  return (
    <>
      <Head>
        <title>
          Certificate {certificate.id} - Certification Program - Dr. Kobros
          Foundation
        </title>
      </Head>
      <Certification certificate={certificate} />
    </>
  );
};

export default CertificationView;
