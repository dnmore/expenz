"use client";
import React from "react";

import {
  
  HiOutlineMenu,
  HiOutlineBriefcase,
  HiOutlineViewGrid
} from "react-icons/hi";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HiOutlineViewGrid },
  {
    name: "Income",
    href: "/dashboard/income",
    icon: HiOutlineBriefcase,
  },
  { name: "Expense", href: "/dashboard/expense", icon: HiOutlineMenu },
];

export default function Navlinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 shadow-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-indigo-100 text-primary": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
