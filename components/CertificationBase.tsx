/** @jsxImportSource theme-ui */

import { FC, ReactNode } from "react";
import { Container } from "theme-ui";
import CertBorder from "../components/CertBorder";
import KobroMenu from "../components/KobroMenu";

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

type Props = {
  children: ReactNode;
};

const CertificationBase: FC<Props> = ({ children }) => {
  return (
    <Container
      as="main"
      sx={{
        px: 2,
        py: 4
      }}
    >
      <CertBorder>{children}</CertBorder>

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

export default CertificationBase;
