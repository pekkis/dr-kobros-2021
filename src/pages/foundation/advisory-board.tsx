import { Heading, Paragraph } from "theme-ui";
import ContentBase from "../../components/ContentBase";
import Head from "next/head";

const FoundationAdvisoryBoardPage = () => {
  return (
    <>
      <Head>
        <title>Advisory Board - Dr. Kobros Foundation</title>
      </Head>
      <ContentBase title="Advisory Board of The Dr. Kobros Foundation">
        <Heading as="h2" mt={4} mb={3}>
          Gaylord L. Lohiposki
        </Heading>
        <Paragraph>
          Gaylord L. Lohiposki is the interim Chief Executive Officer of the Dr.
          Kobros Corporation. He&apos;s in charge of the day-to-day operations
          and funding of the different branches of the conglomerate and also the
          chairman of the board of the Foundation and the leader of the Advisory
          Board.
        </Paragraph>

        <Heading as="h2" mt={4} mb={3}>
          Ragnar Kobros III
        </Heading>
        <Paragraph>
          Ragnar Kobros III, grandson of the founder, is the honorary chairman
          of the board of the Foundation. Advancement of snake oil has been his
          whole life, but he is now mostly enjoying a well-earned retirement
          from the Foundation&apos;s daily operations.
        </Paragraph>
        <Heading as="h2" mt={4} mb={3}>
          Dr. Octavius Vesala
        </Heading>
        <Paragraph>
          Dr. Octavius Vesala is in charge of the Research & Development
          division of the Foundation. He is a Medical Doctor (MD) specialized in
          enemathology. A true philanthropist and the world&apos;s oldest child
          progeny, Dr. Vesala has helped and continues to help many with his
          patented wonder medications. He truly is the torchbearer of the spirit
          of Ragnar Kobros!
        </Paragraph>
        <Heading as="h2" mt={4} mb={3}>
          Abu Pekkis al-Myyrmäki
        </Heading>
        <Paragraph>
          Abu Pekkis al-Myyrmäki is the founder of Red Jihad, a huotilistic
          terrorist organization plotting to overthrown the government.
          He&apos;s in charge of the Foreign Relations division of the
          Foundation, spreading worldwide instability with corruption, lies and
          armed insurgencies. He&apos;s also the leader of the Axis of Evil.
        </Paragraph>
      </ContentBase>
    </>
  );
};

export default FoundationAdvisoryBoardPage;
