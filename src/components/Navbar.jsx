"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useId, useState } from "react";

export default function Navbar() {
  const Links = [
    {
      ref: "#inicio",
      label: "Inicio",
    },
    {
      ref: "#trabajos",
      label: "Trabajos",
    },
    {
      ref: "#sobremi",
      label: "Sobre mi",
    },
    { ref: "#api", label: "APIs" },
  ];
  const [sobre, setSobre] = useState(null);
  const id = useId();
  return (
    <nav
      className="h-12 bg-gray-0 w-screen fixed flex flex-row items-center justify-center gap-10"
      onMouseLeave={() => setSobre(null)}
    >
      <ul className="h-12 p-0 bg-gray-0 w-screen fixed flex flex-row items-center justify-center gap-10">
        {Links.map(({ label, ref }) => (
          <motion.li key={label} whileHover={{ scale: 1.2 }}>
            <a href={ref}>{label}</a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

//<nav className='h-12 bg-gray-0 w-screen fixed flex flex-row items-center justify-center gap-10'>
//          <motion.a className='hover:text-base text-sm duration-100' onMouseEnter={()=>{setSobre(true)}} href='#inicio'>Inicio</motion.a>
//          <motion.a className='hover:text-base text-sm duration-100' href='#sobremi'>Sobre mi</motion.a>
//          <motion.a className='hover:text-base text-sm duration-100' href='#experiencia'>Experiencia</motion.a>
//          <motion.a className='hover:text-base text-sm duration-100' href='#api'>APIs</motion.a>
//</nav>
