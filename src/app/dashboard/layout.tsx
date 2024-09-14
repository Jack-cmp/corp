"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function DashboardLayout(
    {children,}: Readonly<{children: React.ReactNode;}>) {
      const [count, setCount] = useState(0);
      const pathname = usePathname()
      const linkData = [
        {
          name: "About",
          href: "/dashboard/about",
        },
        {
          name: "settings",
          href: "/dashboard/settings",
        }
      ]
    return (
      <div className="border-2 border-dashed border-gray-900 p-4 w-1/2 mx-auto my-10">
           <div className="flex gap-4 font-bold text-lg mb-4">
            {
              linkData.map((link =>(
                <Link key={link.name} className={pathname === link.href ? "text-purple-500" : ""} href={link.href}>{link.name}</Link>
              )))
            }

           </div>
           <h2>Dashboard Layout {count}</h2>
           <button className="bg-black text text-white p-2 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
           {children}
      </div>
    
     
    );
  }