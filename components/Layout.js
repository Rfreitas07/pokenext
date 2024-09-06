import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <Link rel="shortcurt icon" href="/images/favicon.ico" />
        <title>Pokenext</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
