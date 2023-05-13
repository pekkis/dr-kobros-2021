/** @jsxImportSource theme-ui */

import Image from "next/image";
import { FC, ReactNode } from "react";
import { Box, Container, Heading } from "theme-ui";
import logo from "../assets/dr-kobros-logo-large.png";
import KobroMenu from "./KobroMenu";

type Props = {
  title: string;
  children: ReactNode;
};

const ContentBase: FC<Props> = ({ children, title }) => {
  return (
    <Container as="main" py={4} px={2}>
      <Box
        mb={3}
        sx={{
          textAlign: "center"
        }}
      >
        <Image alt="Dr. Kobros" src={logo} priority />
        <Heading as="h1" variant="headings.edmunds">
          {title}
        </Heading>
      </Box>

      {children}

      <footer
        sx={{
          textAlign: "center",
          mt: 4
        }}
      >
        <KobroMenu />
      </footer>
    </Container>
  );
};

export default ContentBase;
