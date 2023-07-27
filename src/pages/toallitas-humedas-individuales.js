import About from "../components/landing/about";
import Hero from "../components/landing/hero";
import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import s4 from "../../public/assets/08.png";
import { info } from "../../info";
import Form from "../components/form/form";

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
          <section id="contact">
            <h2 className="md:w-2/3 mt-20 mb-20">
              Estamos listos para empezar, mándame un WhatsApp o llena el formulario
              y cotiza.
            </h2>
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-full md:w-1/2 mb-20">
                <p className="font-bold mb-8">{info.companyName}</p>
                <p className="mb-4">
                  <a href={`tel:${info.phoneNumber}`}>{info.phoneNumber}</a>
                </p>
                <p className="mb-8">
                  <a href="mailto:contacto@siwcopacker.com">contacto@siwcopacker.com</a>
                </p>
                <p>{info.address.address}</p>
                <p>{info.address.col}</p>
                <p>CP {info.address.cp}</p>
                <p>
                  {info.address.city}, {info.address.state}
                </p>
              </div>
              <Form page="Sachets" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
