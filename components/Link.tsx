/** @jsxImportSource theme-ui */

import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  title?: string;
  variant?: string;
  href: string;
  children: ReactNode;
};

const InternalLink: FC<Props> = ({
  variant = "links.default",
  children,
  href,
  ...rest
}) => {
  return (
    <Link
      href={href}
      passHref
      {...rest}
      sx={{
        variant,
        "&.active": {
          fontWeight: "bold",
          textDecoration: "underline",
        },
      }}
    >
      {children}
    </Link>
  );
};

export default InternalLink;
