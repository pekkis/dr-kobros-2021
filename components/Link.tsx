/** @jsxImportSource theme-ui */

import Link from "next/link";
import { FC } from "react";

type Props = {
  title?: string;
  variant?: string;
  href: string;
};

const InternalLink: FC<Props> = ({
  variant = "links.default",
  children,
  href,
  ...rest
}) => {
  console.log("href");
  return (
    <Link href={href} passHref {...rest}>
      <a
        sx={{
          variant,
          "&.active": {
            fontWeight: "bold",
            textDecoration: "underline",
          },
        }}
      >
        {children}
      </a>
    </Link>
  );
};

export default InternalLink;
