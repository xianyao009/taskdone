import { ReactNode } from "react";
import Link from "next/link";

type LinkContainerProps = {
  children: ReactNode;
  linkTo: string;
};

const LinkContainer = ({ children, linkTo }: LinkContainerProps) => {
  return (
    <Link href={linkTo}>
      <a>{children}</a>
    </Link>
  );
};

export default LinkContainer;
