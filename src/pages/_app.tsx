import type { AppProps } from "next/app";
import Head from "next/head";

import "normalize.css";
import "./_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dr. Kobros Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
