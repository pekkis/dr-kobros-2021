/** @jsxImportSource theme-ui */

import { DateTime } from "luxon";
import { FC, useMemo } from "react";
import { Box, Flex, Heading } from "theme-ui";
import gaylordSignature from "../assets/signature-gaylord.png";
import ragnarSignature from "../assets/signature-kobros.png";
import CertificationBase from "../components/CertificationBase";
import { CertificationType } from "../pages/certificate-create";

type Props = {
  certificate: CertificationType;
};

const Certification: FC<Props> = ({ certificate }) => {
  const d = useMemo(
    () => DateTime.fromISO(certificate.date),
    [certificate.date]
  );

  return (
    <CertificationBase>
      <Box
        as="header"
        sx={{
          textAlign: "center",
          my: 3,
          mb: 4
        }}
      >
        <Heading
          as="h1"
          variant="headings.edmunds"
          sx={{
            fontSize: 40
          }}
        >
          The Dr. Kobros Foundation
        </Heading>
        <Heading
          as="h2"
          sx={{
            fontWeight: 400,
            fontSize: 3
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
            fontStyle: "italic"
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
            fontWeight: "bold"
          }}
        >
          {certificate.who}
        </Box>
        <Box
          my={3}
          sx={{
            py: 3,
            textAlign: "center",
            fontSize: 3,
            fontStyle: "italic"
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
            fontWeight: "bold"
          }}
        >
          {certificate.what}
        </Box>

        <Flex
          sx={{
            width: "100%",
            alignItems: "flex-end",
            mt: 5,
            mb: 3
          }}
        >
          <Box
            sx={{
              width: "100%",
              px: 3
            }}
          >
            <Box
              sx={{
                borderBottomStyle: "solid",
                borderBottomColor: "#000",
                borderBottomWidth: "1px",
                pl: 2
              }}
            >
              <img
                sx={{
                  marginBottom: "-13px"
                }}
                alt="Ragnar Kobros, Chairman"
                src={ragnarSignature.src}
              />
            </Box>
            Ragnar Kobros, Chairman
          </Box>
          <Box
            sx={{
              width: "100%",
              px: 3
            }}
          >
            <Box
              sx={{
                borderBottomStyle: "solid",
                borderBottomColor: "#000",
                borderBottomWidth: "1px",
                pl: 2
              }}
            >
              <img
                sx={{
                  marginBottom: "-15px"
                }}
                alt="Gaylord L. Lohiposki, interim CEO"
                src={gaylordSignature.src}
              />
            </Box>
            Gaylord L. Lohiposki, interim CEO
          </Box>
        </Flex>

        <Box
          sx={{
            fontSize: 1,
            mt: 4,
            mb: 2,
            px: 2,
            textAlign: "center"
          }}
        >
          <strong>Verification URL:</strong> {process.env.NEXT_PUBLIC_URL}
          /certificate/
          {certificate.id}
        </Box>
      </Box>
    </CertificationBase>
  );
};

export default Certification;
