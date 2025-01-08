import React from "react";

import Navlinks from "./navlinks";
import Logo from "@/app/_components/logo";
import Link from "next/link";

export default function Sidenav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link className="mb-2 flex h-15 items-end justify-start rounded-md p-4 md:h-20" href="/">
        <div className="w-32 text-white md:w-40">
          <Logo />
        </div>
      </Link>

      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Navlinks />
        
      </div>
    </div>
  );
}
