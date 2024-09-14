"use client"
 import { useState } from "react";


export default function DashboardTemplate(
    {children,}: Readonly<{children: React.ReactNode;}>) {
      const [count, setCount] = useState(0);
    return (
      <div className="border-2 border-dashed border-gray-900 p-4  mx-auto my-10">
           <h2>Dashboard Template {count}</h2>
           <button className="bg-black text text-white p-2 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
           {children}
      </div>
    
     
    );
  }