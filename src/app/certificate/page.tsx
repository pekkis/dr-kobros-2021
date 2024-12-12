import Link from "../../components/Link";

import CertificationBase from "../../components/CertificationBase";
import MainHeading from "../../components/content/MainHeading";
import * as styles from "../../certificate.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification Program - Dr. Kobros Foundation",
  description:
    "An industry-wide standard and a measure of distinction that employers use to evaluate prospective employees."
};

const CertificationIndexPage = () => {
  return (
    <CertificationBase>
      <div className={styles.container}>
        <div>
          <MainHeading>Dr. Kobros certification program</MainHeading>

          <div id="get-certified">
            <p>
              Our certifications have become an industry-wide standard and a
              measure of distinction that employers use to evaluate prospective
              employees. Stand out from the crowd by getting certified with The
              Dr. Kobros Foundation!
            </p>
            <p>
              Sponsored by the Dr. Kobros Foundation and developed according to{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.standards.no"
              >
                Standards Norway
              </a>{" "}
              (NORSOK) standards, The Dr. Kobros certification programs are
              designed to test a candidate’s level of knowledge without
              prejudice. The tests use a set of testing questions that reflect
              real-world scenarios, including knowledge in many areas ranging
              from basics to the more complex topics.
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
        </div>
      </div>
    </CertificationBase>
  );
};

export default CertificationIndexPage;
