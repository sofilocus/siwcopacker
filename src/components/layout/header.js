import Link from "next/link";
import { info } from "../../../info";
import { useEffect, useRef, useState } from "react";
import WhatsButton from "./../Buttons/whatsButton";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
];

export default function Header({ sub }) {
  const [mainHeaderHeight, setMainHeaderHeight] = useState();
  const mainHeader = useRef();

  useEffect(() => {
    setMainHeaderHeight(mainHeader.current.offsetHeight / 10);
  }, [mainHeader]);

  return (
    <>
      <header
        className={` flex items-center justify-center bg-white z-[99] hover:top-0

        `}
      >
        <div
          ref={mainHeader}
          className="fixed bg-white backdrop-blur-lg bg-opacity-50 w-screen rounded-b-xl top-0 h-[100px] items-center flex z-[1]"
        >
          <div className="container flex justify-between items-center">
            <Link href="/" passhref>
              <a className="w-36 invert py-4">
                <img src="/assets/logo.png" alt={info.companyName} />
              </a>
            </Link>
            <div className="ft-0">
              <a
                href={`//wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`}
                target="_blank"
                legacyBehavior
              >
                <WhatsButton>Mándanos un WhatsApp</WhatsButton>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
