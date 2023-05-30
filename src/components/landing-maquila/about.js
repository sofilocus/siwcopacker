import React from "react";
import { PRODMAQ, SERVICIOS } from "../../../utils/data";
import ActionButton from "../Buttons/actionButton";
import Image from "next/image";
import s5 from "../../../public/assets/09.png";
import s6 from "../../../public/assets/12.png";
import s7 from "../../../public/assets/13.png";
import s8 from "../../../public/assets/14.png";
import Form from "../form/form";
import { info } from "../../../info";

export default function About() {
  return (
    <>
      <section className="pt-20 pb-20">
        <div className="flex flex-col">
          <p className="">
            En SIW somos expertos en envasar versiones individuales de tus
            productos en “Sachets” (sobrecitos con una pequeña dosis de tu
            producto. Incluso puede ir acompañado de una toallita)
            <br />
            <br />
            Nos encargamos de la Maquila de envasado en Sachets, Toallitas
            individuales y Monodosis. Para que los uses como promocionales, una
            nueva presentación de tus productos o lo que necesites.
          </p>
          <div className="md:flex md:flex-row grid grid-cols-2 gap-5 items-center justify-around py-20">
            {PRODMAQ.map((producto) => {
              return (
                <div className="flex flex-col items-center md:p-2 p-1 justify-center">
                  <p className="font-semibold mb-5">{producto.name}</p>
                  <div className="flex border rounded-lg">{producto.img}</div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center">
            <ActionButton>
              <p>Cuéntame si quieres empezar a maquilar.</p>
            </ActionButton>
          </div>
        </div>
      </section>
      <section className="pb-40">
        <div className="flex flex-col">
          <h2>
            Atrae nuevos clientes con el mejor argumento que tienes: tu producto
          </h2>
          <p>
            Ya tienes un gran producto, ahora solo haz que la gente lo conozca
            con muestras en dosis individuales. Amplia tu alcance e impacto
            comercial, invitando a tus clientes a probar tu producto sin
            compromisos. Dar poquito causa intriga y una muestra promocional de
            tu producto en un sachet te va a hacer vender.
          </p>
        </div>
        <div className="md:flex md:flex-row grid grid-cols-1 items-center justify-around py-20">
          {SERVICIOS.map((servicio) => {
            return (
              <div className="flex flex-row  items-center p-2">
                <p className="font-semibold w-2/3 mb-5 flex items-center justify-center text-center">
                  {servicio.description}
                </p>
                <div className="flex w-2/3">{servicio.img}</div>
              </div>
            );
          })}
        </div>
        <p className="mb-20">
          El tiempo de entrega es desde 5 semanas a partir de la definición del
          proyecto y recepción del anticipo.
        </p>
        <div className="flex justify-center">
          <ActionButton>
            <p>Dale clic aquí para empezar.</p>
          </ActionButton>
        </div>
      </section>
      {/* <section className="pb-40">
        <div className="flex flex-col">
          <div className="md:flex md:flex-row flex flex-col-reverse items-center">
            <div className="md:text-left text-center">
              <h2>Un sachet de nuestro trabajo</h2>
              <p className="mt-5">
                Testimonios, otros proyectos, casos de estudio. Incluso pueden
                ser garantías contra el precio.
              </p>
            </div>
            <div className="w-2/3">
              <Image
                src={s4}
                width={500}
                height={500}
                alt="image"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <ActionButton>
              <p>Dime cuántos necesitas y para cuándo.</p>
            </ActionButton>
          </div>
        </div>
      </section> */}
      <section className="pb-40">
        <div className="flex flex-col">
          <div className="md:flex md:flex-row flex flex-col-reverse items-center">
            <div className="md:text-left text-center">
              <h2>El diseño va por nuestra cuenta</h2>
              <div className="flex flex-col gap-4">
                <p className="mt-5">
                  El empaque es tan importante como el contenido.
                </p>
                <p>
                  Si no tienes diseño y éste puede ser breve, nosotros te lo
                  incluimos sin costo.
                </p>
              </div>
            </div>
            <div className="w-2/3">
              <Image
                src={s5}
                width={500}
                height={500}
                alt="image"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <ActionButton>
              <p>Dime cuántos necesitas y para cuándo.</p>
            </ActionButton>
          </div>
        </div>
      </section>
      <section className="pb-40">
        <div className="flex flex-col justify-center items-center">
          <h2 className="w-3/4 text-center">
            Resuelve tu duda y cotiza los promocionales de tu marca
          </h2>
          <div className="md:flex md:flex-row flex flex-col items-center justify-between">
            <div className="flex flex-grow w-2/3">
              <Image
                src={s6}
                width={500}
                height={500}
                alt="image"
                objectFit="contain"
              />
            </div>
            <div className="p-5"></div>
            <div>
              <p className="md:w-[42rem]">
                <b>Tiempo de vida del producto envasado</b> <br /> Desde 6 hasta
                24 meses (dependiendo de materiales a utilizar. Se requieren
                pruebas de factibilidad)
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-row flex flex-col items-center justify-between">
            <div className="flex flex-grow w-2/3">
              <Image
                src={s7}
                width={500}
                height={500}
                alt="image"
                objectFit="contain"
              />
            </div>
            <div className="p-5"></div>
            <div>
              <p className="md:w-[42rem]">
                <b> Mínimos de producción</b> <br /> Desde 5 mil piezas en
                material “no alta barrera” (no recomendado para soluciones o
                productos elaborados en base a alcohol, volátiles, agresivos y/o
                corrosivos a polímeros) Desde 20 mil piezas en material “alta
                barrera”
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10">
        <div className="flex flex-col">
          <div className="md:flex md:flex-row flex flex-col-reverse items-center">
            <div>
              <h2>Haz que confíen en ti, confiando en nosotros</h2>
              <p className="mt-20 md:w-[42rem]">
                Déjame saber si podemos ayudarte a expandir tu negocio y
                siéntete libre de preguntar tus inquietudes. Formato de entrega:
                cajas de 1,000 piezas o servicio de reempaque sin costo de
                acuerdo con requerimiento del cliente. Envío gratis: pedidos
                mayores a 60 mil piezas (a una misma dirección y en un solo
                evento)
              </p>
            </div>
            <div className="w-2/3">
              <Image
                src={s8}
                width={500}
                height={500}
                alt="image"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2 className="md:w-2/3 mt-20 mb-20">
          Estamos listos para empezar, mándame un WhatsApp o llena el
          formulario y cotiza.
        </h2>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 mb-20">
            <p className="font-bold mb-8">{info.companyName}</p>
            <p className="mb-4"><a href={`tel:${info.phoneNumber}`}>{info.phoneNumber}</a></p>
            <p className="mb-8"><a href="mailto:info@siwcopacker.com">info@siwcopacker.com</a></p>
            <p>{info.address.address}</p>
            <p>{info.address.col}</p>
            <p>CP {info.address.cp}</p>
            <p>{info.address.city}, {info.address.state}</p>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
}
