

import { Lato } from "next/font/google";
import Inicio from "@/components/Inicio";
import Experiencia from "@/components/Experiencia";
import Soft from "@/components/Soft";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });

export default async function Home({params}) {
  const diccionario = await import(`@/dictionaries/${params.lang}.json`).then(m=>m.default)
  return (
    <main className=" w-screen h-screen bg-sky-500">
      <Inicio lang={diccionario.inicio}/>
      <Experiencia lang={diccionario.experiencia}/>
      <Soft lang={diccionario.soft}/>
      <Proyectos lang={diccionario.proyectos}/>
      <Contacto lang={diccionario.contact}/>
    </main>
  );
}
