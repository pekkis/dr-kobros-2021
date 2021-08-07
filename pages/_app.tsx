import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../services/theme";
import { Global } from "@emotion/react";
import Head from "next/head";
import { GoogleFonts } from "next-google-fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          "@font-face": {
            fontFamily: "Edmunds",
            fontWeight: "normal",
            fontStyle: "normal",
            src: "url('/edmunds-webfont.woff')",
          },
          "html, body": {
            fontFamily: "Poppins, sans-serif",
          },
        }}
      />

      <Head>
        <title>The Foundation - Dr. Kobros Foundation</title>
      </Head>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap" />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
