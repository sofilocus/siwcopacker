import About from "../components/landing/about";
import Hero from "../components/landing/hero";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import s4 from "../../public/assets/08.png";

export default function Landing() {
  const [showModal, setShowModal] = useState(true);

  const renderModal = () => {
    return (
      <div className="fixed flex justify-center items-center inset-0 bg-black/50 p-20 z-50">
        <div className="relative flex w-full md:w-1/2 bg-white rounded-xl p-20">
          <div className="flex flex-col md:w-1/2">
            <h2>Toallita con alcohol IPA 70%</h2>
            <p>Toallitas Humedas Individuales Impregnadas con alcohol Isopropílico
              para la limpieza de pequeñas superficies.</p>
            <Link href="#contact">
              <a className="mt-8 bg-[#1da1f2] p-4 rounded-lg after:content-['›'] after:pl-4 text-white" onClick={() => setShowModal(false)}>Contáctanos</a>
            </Link>
          </div>
          <div className="relative md:w-1/2">
            <Image
              src={s4}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className='cursor-pointer' onClick={() => setShowModal(false)}>
            <span className="absolute top-4 right-4 ft-4 material-icons">close</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {showModal && renderModal()}
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
