import { ReactNode } from "react";
import Head from "next/head";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Taskdone - To-do List" }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="author" content="Taskdone - To-do List" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          sizes="16x16"
          href="/favicon.ico"
        />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
