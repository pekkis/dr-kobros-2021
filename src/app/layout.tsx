import { ReactNode } from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "700"]
});

type Props = {
  children: ReactNode;
};

import "normalize.css";
import "../_app.css";

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fi">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={poppins.className}>
        {children}
        <div id="modal"></div>
      </body>
    </html>
  );
}
