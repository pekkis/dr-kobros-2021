import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

import "normalize.css";
import "../_app.css";

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fi">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,900;1,400&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        {children}
        <div id="modal"></div>
      </body>
    </html>
  );
}
