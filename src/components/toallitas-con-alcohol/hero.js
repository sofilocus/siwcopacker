import Image from "next/image";
import React from "react";
import heroimg from "../../../public/assets/hero-tica.png";

export default function Hero() {
  return (
    <section>
      <main className="w-screen">
        <div className="flex w-[100%]">
          <Image
            src={heroimg}
            alt="hero image"
            className="flex w-full rounded-b-xl"
          />
        </div>
      </main>
    </section>
  );
}
