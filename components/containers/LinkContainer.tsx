import { ReactNode } from "react";
import Link from "next/link";

type LinkContainerProps = {
  children: ReactNode;
  linkTo: string;
  target: string;
};

const LinkContainer = ({ children, linkTo, target }: LinkContainerProps) => {
  return (
    <Link href={linkTo}>
      <a target={target}>{children}</a>
    </Link>
  );
};

export default LinkContainer;
