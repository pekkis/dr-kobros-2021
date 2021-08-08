/** @jsxImportSource theme-ui */

import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { CertificationType } from "../pages/certificate-create";
import CertificationBase from "../components/CertificationBase";
import { Box, Heading, Flex, Input } from "theme-ui";
import gaylordSignature from "../assets/signature-gaylord.png";
import ragnarSignature from "../assets/signature-kobros.png";
import axios from "axios";
import { useRouter } from "next/router";
import { DateTime } from "luxon";

type Props = {
  certificate: CertificationType;
  setCertificate: (cert: CertificationType) => void;
};

const CertificationCreator: FC<Props> = ({ certificate, setCertificate }) => {
  const [gaylordSigned, setGaylordSigned] = useState<boolean>(false);
  const [ragnarSigned, setRagnarSigned] = useState<boolean>(false);

  const router = useRouter();

  const d = useMemo(
    () => DateTime.fromISO(certificate.date),
    [certificate.date]
  );

  const setWho = useCallback(
    (who: string) => {
      setCertificate({
        ...certificate,
        who,
      });
    },
    [certificate, setCertificate]
  );

  const setWhat = useCallback(
    (what: string) => {
      setCertificate({
        ...certificate,
        what,
      });
    },
    [certificate, setCertificate]
  );

  useEffect(() => {
    if (!gaylordSigned || !ragnarSigned) {
      return;
    }

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
      <Box
        as="header"
        sx={{
          textAlign: "center",
          my: 3,
          mb: 4,
        }}
      >
        <Heading
          as="h1"
          variant="headings.edmunds"
          sx={{
            fontSize: 40,
          }}
        >
          The Dr. Kobros Foundation
        </Heading>
        <Heading
          as="h2"
          sx={{
            fontWeight: 400,
            fontSize: 3,
          }}
        >
          Dr. Kobros vei, Nordbyhagen, Norway
        </Heading>
      </Box>

      <Box my={3} px={3}>
        <Box
          sx={{
            py: 3,
            textAlign: "center",
            fontSize: 3,
            fontStyle: "italic",
          }}
        >
          This is to certify that on{" "}
          {d.setLocale("en").toLocaleString(DateTime.DATE_MED)}
        </Box>
        <Box
          my={3}
          sx={{
            py: 3,
            textAlign: "center",
            fontSize: 3,
            fontWeight: "bold",
          }}
        >
          <Input
            sx={{
              maxWidth: 600,
              display: "inline-block",
            }}
            disabled={ragnarSigned && gaylordSigned}
            placeholder="Your name here"
            value={certificate.who}
            onChange={(e) => setWho(e.target.value)}
          />
        </Box>
        <Box
          my={3}
          sx={{
            py: 3,
            textAlign: "center",
            fontSize: 3,
            fontStyle: "italic",
          }}
        >
          Successfully passed the Examination for the Certificate
        </Box>
        <Box
          my={3}
          sx={{
            my: 3,
            textAlign: "center",
            fontSize: 3,
            fontWeight: "bold",
          }}
        >
          <Input
            disabled={ragnarSigned && gaylordSigned}
            sx={{
              maxWidth: 600,
              display: "inline-block",
            }}
            placeholder="Certificate name here"
            value={certificate.what}
            onChange={(e) => setWhat(e.target.value)}
          />
        </Box>

        <Flex
          sx={{
            width: "100%",
            alignItems: "flex-end",
            mt: 5,
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              px: 3,
            }}
          >
            <Box
              sx={{
                borderBottomStyle: "solid",
                borderBottomColor: "#000",
                borderBottomWidth: "1px",
                pl: 2,
              }}
            >
              {ragnarSigned && (
                <img
                  sx={{
                    marginBottom: "-13px",
                  }}
                  alt="Ragnar Kobros, Chairman"
                  src={ragnarSignature.src}
                />
              )}
              {!ragnarSigned && (
                <button
                  disabled={!certificate.who || !certificate.what}
                  sx={{
                    my: 2,
                  }}
                  onClick={() => setRagnarSigned(true)}
                >
                  sign
                </button>
              )}
            </Box>
            Ragnar Kobros, Chairman
          </Box>
          <Box
            sx={{
              width: "100%",
              px: 3,
            }}
          >
            <Box
              sx={{
                borderBottomStyle: "solid",
                borderBottomColor: "#000",
                borderBottomWidth: "1px",
                pl: 2,
              }}
            >
              {gaylordSigned && (
                <img
                  sx={{
                    marginBottom: "-15px",
                  }}
                  alt="Gaylord L. Lohiposki, interim CEO"
                  src={gaylordSignature.src}
                />
              )}
              {!gaylordSigned && (
                <button
                  disabled={!certificate.who || !certificate.what}
                  sx={{
                    my: 2,
                  }}
                  onClick={() => setGaylordSigned(true)}
                >
                  sign
                </button>
              )}
            </Box>
            Gaylord L. Lohiposki, interim CEO
          </Box>
        </Flex>
      </Box>
    </CertificationBase>
  );
};

export default CertificationCreator;
