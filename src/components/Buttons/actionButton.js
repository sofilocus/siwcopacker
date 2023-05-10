import Link from "next/link";
import React from "react";

export default function ActionButton({ children }) {
  return (
    <div>
      <Link href={"#contact"}>
        <div
          href="#contact"
          class="px-5 cursor-pointer py-2.5 relative rounded group text-white font-medium inline-block"
        >
          <div class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></div>
          <div class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></div>
          <div class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></div>
          <div class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></div>
          <div class="relative">{children}</div>
        </div>
      </Link>
    </div>
  );
}
