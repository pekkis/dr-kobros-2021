/** @jsxImportSource theme-ui */

import Head from "next/head";
import Image from "next/image";
import { Box, Container, Flex, Input } from "theme-ui";
import logo from "../assets/dr-kobros-logo-large.png";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import KobroMenu from "../components/KobroMenu";
import CertBorder from "../components/CertBorder";

/*

div#inner {
    margin: 0 auto;
    width: 960px;
    border: 10px solid #e3d5ca;
    -moz-border-radius-topleft: 15px;
    -webkit-border-top-left-radius: 15px;
    border-top-left-radius: 15px;
    -moz-border-radius-bottomright: 15px;
    -webkit-border-bottom-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
*/

const CertificationBase: FC = ({ children }) => {
  return (
    <Container
      as="main"
      sx={{
        px: 2,
        py: 4,
      }}
    >
      <CertBorder>{children}</CertBorder>

      <footer
        sx={{
          textAlign: "center",
          mt: 4,
        }}
      >
        <KobroMenu />
      </footer>
    </Container>
  );
};

export default CertificationBase;
