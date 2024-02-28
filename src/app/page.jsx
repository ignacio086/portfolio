"use client";

import { Lato } from "next/font/google";
import Inicio from "@/components/Inicio";
import Experiencia from "@/components/Experiencia";
import Soft from "@/components/Soft";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });

export default function Home() {
  return (
    <main className=" w-screen h-screen bg-sky-500">
      <Inicio/>
      <Experiencia/>
      <Soft/>
      <Proyectos/>
      <Contacto/>
    </main>
  );
}
