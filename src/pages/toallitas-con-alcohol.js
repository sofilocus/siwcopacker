import About from "../components/toallitas-con-alcohol/about";
import Hero from "../components/toallitas-con-alcohol/hero";
import Head from "next/head";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Maquila de Sachets</title>
        <meta
          name="description"
          content="Expertos en envasar versiones individuales de tus productos en “Sachets”, sobrecitos con una pequeña dosis de tu producto."
        />
      </Head>
      <h1 className="main_headline">Pequeños empaques, gran difusión</h1>
      <section className="text-neutral-600 w-screen flex flex-col items-center justify-center">
        <div>
          <Hero />
          <div className="md:max-w-7xl w-screen flex flex-col items-center justify-center container mx-auto">
            <About />
          </div>
        </div>
      </section>
    </>
  );
}
