import Image from "next/image";
import desi from "../public/assets/01.png";
import anti from "../public/assets/02.png";
import ref from "../public/assets/03.png";
import desm from "../public/assets/04.png";

import sach from "../public/maquila-assets/01.png";
import prom from "../public/maquila-assets/02.png";
import toa from "../public/maquila-assets/03.png";

import s1 from "../public/assets/05.png";
import s2 from "../public/assets/06.png";
import s3 from "../public/assets/07.png";

export const PRODUCTOS = [
  {
    name: "Desifectante",
    img: <Image src={desi} className="rounded-lg" alt="image" />,
  },
  {
    name: "Antibactereal",
    img: <Image src={anti} className="rounded-lg" alt="image" />,
  },
  {
    name: "Refrescante",
    img: <Image src={ref} className="rounded-lg" alt="image" />,
  },
  {
    name: "Desmaquillante",
    img: <Image src={desm} className="rounded-lg" alt="image" />,
  },
];

export const PRODMAQ = [
  {
    name: "Muestras individuales",
    img: <Image src={sach} className="rounded-lg" alt="image" />,
  },
  {
    name: "Promocionales",
    img: <Image src={prom} className="rounded-lg" alt="image" />,
  },
  {
    name: "Amenidades",
    img: <Image src={toa} className="rounded-lg" alt="image" />,
  },
];

export const SERVICIOS = [
  {
    description: "Da a conocer tu marca.",
    img: <Image src={s1} className="rounded-lg" alt="image" />,
  },
  {
    description: "Llega a clientes potenciales.",
    img: <Image src={s2} className="rounded-lg" alt="image" />,
  },
  {
    description: "Destaca ante la competencia.",
    img: <Image src={s3} className="rounded-lg" alt="image" />,
  },
];
