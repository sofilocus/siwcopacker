import About from "../components/landing/about";
import Hero from "../components/landing/hero";
import Head from "next/head";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Toallitas Húmedas Individuales</title>
        <meta name="description"
              content="Expertos en personalizar toallitas individuales con el mensaje de tu marca. Convertimos un producto común en uno portátil, práctico y listo para usarse." />
      </Head>
      <h1 className="main_headline">Pequeños empaques, gran difusión</h1>
      <section className="text-neutral-600 w-screen flex flex-col items-center justify-center">
        <Hero />
        <div className="md:max-w-7xl w-screen flex flex-col items-center justify-center container mx-auto">
          <About />
        </div>
      </section>
    </>
  );
}
