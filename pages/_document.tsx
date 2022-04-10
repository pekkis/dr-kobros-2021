import Document, { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";
import { StrictMode } from "react";

const DrKobrosDocument = () => {
  return (
    <StrictMode>
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,900;1,400&display=swap"
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
          <div id="modal"></div>
        </body>
      </Html>
    </StrictMode>
  );
};

export default DrKobrosDocument;
