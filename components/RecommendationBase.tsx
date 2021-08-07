/** @jsxImportSource theme-ui */

import Head from "next/head";
import Image from "next/image";
import { Box, Container, Flex, Input } from "theme-ui";
import logo from "../assets/dr-kobros-logo-large.png";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import KobroMenu from "../components/KobroMenu";

const RecommendationBase: FC = ({ children }) => {
  return (
    <Container
      sx={{
        px: 2,
      }}
    >
      <Head>
        <title>Dr. Kobros Foundation</title>
        <meta name="description" content="Dr. Kobros Foundation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Box mb={3}>
              <Image src={logo} alt="Dr. Kobros Foundation" />
            </Box>
            <Box mt={2} sx={{}}>
              <Box
                sx={{
                  fontFamily: "Edmunds",
                  fontSize: 5,
                }}
              >
                {children}
              </Box>
              <footer
                sx={{
                  mt: 4,
                }}
              >
                <KobroMenu />
              </footer>
            </Box>
          </Box>
        </Flex>
      </main>
    </Container>
  );
};

export default RecommendationBase;