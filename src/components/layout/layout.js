import Head from "next/head";
import { info } from "../../../info";
import Header from "./header";
import Footer from "../landing/footer";

export default function Layout({ children }) {
  const sub = {
    bgColor: "bg-gray-100",
    logo: {
      href: "/",
      content: <h1 className="ft-2 !mb-0">Subheader</h1>,
    },
    children: [
      { label: "Home", href: "/" },
      { label: "About", href: "/" },
    ],
  };

  return (
    <>
      <Head>
        <title>{info.companyName}</title>
        <meta name="description" content={info.description} />
      </Head>

      <Header sub={sub} />

      <main className="mt-[100px] w-screen flex-grow">{children}</main>
      <Footer />
      {/* <Footer /> */}
    </>
  );
}
