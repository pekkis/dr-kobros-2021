/** @jsxImportSource theme-ui */

import Head from "next/head";
import { Box, Container, Heading } from "theme-ui";
import kobroseal from "../assets/kobroseal-smaller.png";
import { useRouter } from "next/router";
import Link from "../components/Link";

import CertificationBase from "../components/CertificationBase";

const CertificationIndex = () => {
  const router = useRouter();

  return (
    <CertificationBase>
      <Head>
        <title>Certification Program - Dr. Kobros Foundation</title>
        <meta
          name="description"
          content="An industry-wide standard and a measure of distinction that employers use to evaluate prospective employees."
        />
      </Head>

      <Box
        sx={{
          p: 3,
        }}
      >
        <Box
          sx={{
            maxWidth: "500px",
          }}
        >
          <Heading as="h1" variant="headings.edmunds">
            Dr. Kobros certification program
          </Heading>

          <div id="get-certified">
            <p>
              The Dr. Kobros certifications have become an industry-wide
              standard and a measure of distinction that employers use to
              evaluate prospective employees. Stand out from the crowd by
              getting certified with the Foundation!
            </p>
            <p>
              Sponsored by the Dr. Kobros Foundation and developed according to
              Norwegian National Standards Institute (NNSI) standards, The Dr.
              Kobros certification programs are designed to test a candidate’s
              level of knowledge without prejudice. The tests use a set of
              testing questions that reflect real-world scenarios, including
              knowledge in many areas ranging from basics to the more complex
              topics.
            </p>

            <p>
              The exams are created by an{" "}
              <Link variant="links.cert" href="/foundation/advisory-board">
                Advisory Board
              </Link>{" "}
              made up of thought leaders in the global community. Because the
              exams are created with specific skills, knowledge and competencies
              that are matched to real-world job functions, our certifications
              provide a measure of distinction that employers use to evaluate
              prospective employees.
            </p>

            <ul>
              <li>
                <Link variant="links.cert" href="/certificate-create">
                  Get certified!
                </Link>
              </li>
            </ul>
          </div>
        </Box>
      </Box>
    </CertificationBase>
  );
};

export default CertificationIndex;
