"use client"
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const linkData = [
  { href: "/performance", label: "Performance" },
  { href: "/reliability", label: "Reliability" },
  { href: "/scale", label: "Scale" },
];

// const accessLink = ["/","/performance","/reliability","/scale"];

export default function Header() {
  const pathname = usePathname();
  // if (!accessLink.includes(pathname)) return null;
  return (
    <div>
      <div className="absolute w-full z-10">
        <div className="flex justify-between container mx-auto text-white p-8 items-center">
          <Link className="text-3xl font-bold" href="/">
            Home
          </Link>
          <div className="text-xl space-x-4">
            {linkData.map((link) => (
              <Link key={link.href} href={link.href} className={pathname === link.href ? "text-purple-500" : ""}>
                {link.label}
              </Link>
            ))
            }
           
          </div>
        </div>
      </div>
    </div>
  );
}
