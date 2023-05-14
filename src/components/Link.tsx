import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  title?: string;
  variant?: string;
  href: string;
  children: ReactNode;
};

const InternalLink: FC<Props> = ({ children, href, ...rest }) => {
  return (
    <Link href={href} passHref {...rest}>
      {children}
    </Link>
  );
};

export default InternalLink;
