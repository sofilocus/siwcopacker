import React from "react";
import { PRODUCTOS, SERVICIOS } from "../../../utils/data";
import ActionButton from "../Buttons/actionButton";
import Link from "next/link";
import Image from "next/image";
import s4 from "../../../public/assets/08.png";
import s5 from "../../../public/assets/09.png";
import s6 from "../../../public/assets/12.png";
import s7 from "../../../public/assets/13.png";
import s8 from "../../../public/assets/14.png";
import Form from "../form/form";

export default function About() {
  return (
    <div className="">
      <section className="py-40">
        <div className="flex flex-col items-center justify-center">
          <p className="">
            En S&IW somos expertos en personalizar toallitas individuales con el
            mensaje de tu marca. Nos encargamos de convertir un producto común
            en uno portátil, para poder llevarlo de forma práctica y usarlo para
            lo que se necesite.
          </p>
          <div className="md:flex md:flex-row grid grid-cols-2 items-center justify-around py-20">
            {PRODUCTOS.map((producto) => {
              return (
                <div className="flex flex-col items-center p-2">
                  <p className="font-semibold mb-5">{producto.name}</p>
                  <div className="flex border rounded-lg">{producto.img}</div>
                </div>
              );
            })}
          </div>
          <p className="pb-20">
            Aplícalo en tu marca como una oportunidad de alcance promocional.
          </p>
          <div className="flex items-center justify-center">
            <ActionButton>
              <p>Cuéntame si quieres tu marca en una toallita húmeda.</p>
            </ActionButton>
          </div>
        </div>
      </section>
      <section className="pb-40">
        <div className="flex flex-col">
          <h2>Promociona tu marca y dales un extra que los haga volver a ti</h2>
          <p>
            Ya ofreces un gran servicio, ahora súmale una cortesía útil y
            práctica. Fideliza a tus clientes y amplia tu alcance e impacto
            comercial.
          </p>
        </div>
        <div className="md:flex md:flex-row grid grid-cols-1 md:gap-0 gap-10 items-center justify-around py-20">
          {SERVICIOS.map((servicio) => {
            return (
              <div className="flex items-center md:p-2 p-1">
                <p className="font-semibold flex items-center justify-center w-2/3 mb-5 text-center">
                  {servicio.description}
                </p>
                <div className="flex w-2/3 ">{servicio.img}</div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <ActionButton>
            <p>Dale clic aquí para empezar.</p>
          </ActionButton>
        </div>
      </section>
      <section className="pb-40">
        <div className="flex flex-col">
          <div className="md:flex md:flex-row flex flex-col-reverse items-center">
            <div className="text-center md:text-left">
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
              <p className="">Dime cuántos necesitas y para cuándo.</p>
            </ActionButton>
          </div>
        </div>
      </section>
      <section className="pb-40">
        <div className="flex flex-col">
          <div className="md:flex md:flex-row flex flex-col-reverse items-center">
            <div className="text-center md:text-left">
              <h2>El diseño de tus toallitas va por nuestra cuenta</h2>
              <p className="mt-5">
                El empaque es tan importante como el contenido. Si no tienes el
                diseño, nosotros te lo incluimos sin costo.
              </p>
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
            <div className="w-2/3">
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
                24 meses (dependiendo de materiales a utilizar se requieren
                pruebas defactibilidad)
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
          <div className="md:flex md:flex-row flex flex-col flex-col-reverse items-center">
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
        <Form />
      </section>
    </div>
  );
}
