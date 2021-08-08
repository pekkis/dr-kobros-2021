import Image from "next/image";
import logo from "../assets/dr-kobros-logo-large.png";
import { Container, Box, Heading } from "theme-ui";
import { FC } from "react";

type Props = {
  title: string;
};

const ContentBase: FC<Props> = ({ children }) => {
  return (
    <Container as="main" py={4} px={2}>
      <Box
        mb={3}
        sx={{
          textAlign: "center",
        }}
      >
        <Image alt="Dr. Kobros" src={logo} />
        <Heading as="h1" variant="headings.edmunds">
          The Dr. Kobros Foundation
        </Heading>
      </Box>

      {children}
    </Container>
  );
};

export default ContentBase;
