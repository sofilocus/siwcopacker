import React from "react";
import Form from "../form/form";
import { info } from "../../../info";
import Image from "next/image";

export default function Contacto() {
  return (
    <section id="contact" className=" py-20">
      <div className="w-screen flex items-center justify-center  my-[80px]">
        <div className="lg:flex lg:flex-row flex flex-col items-center">
          <div className="lg:w-[961px] border rounded-xl flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.0577327953106!2d-103.40993312394798!3d20.66723008089312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af9cb2b80731%3A0xd74fdaf84156ced2!2sUnidad%20m%C3%A9dica%20Santa%20Mar%C3%ADa%20chapalita!5e0!3m2!1sen!2smx!4v1683161147880!5m2!1sen!2smx"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:ml-10 mt-10 lg:mt-0">
            <p className="p-10 bg-neutral-100 rounded-xl border-b">
              <b>Cirugía</b> <br /> Hospital Santa María Chapalita <br /> y
              Clínica Montevideo.
            </p>
            <p className="p-10 bg-neutral-100 rounded-xl border-b">
              <b>Consultorio</b> <br /> Unidad Médica Santa María <br />{" "}
              Chapalita, Santa Rita #1031 Int 207. <br /> Colonia Chapalita
              Zapopan, Jalisco.
            </p>
          </div>
        </div>
      </div>
      <div className=" lg:w-1/2 container">
        <h1 className="font-semibold">Contáctame</h1>
        <div className="">
          <h6 className="">
            Si tienes alguna pregunta, acércate para realizar una valoración,
            conocer tus antecedentes médicos y saber si eres apto o apta para el
            procedimiento que deseas.
          </h6>

          <Form />
        </div>
      </div>
    </section>
  );
}
