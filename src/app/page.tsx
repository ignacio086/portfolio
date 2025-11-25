'use client'
import Inicio from "./components/Inicio";
import Nav from "./components/Nav";
import Inter from "./components/Inter";
import Proyectos from "./components/Proyectos";
import InterLow, { InterLowBrown } from "./components/InterLow";
import AboutInter from "./components/Aboutinter";
import AboutMe from "./components/About";
import Contacto from "./components/Contacto";

export default function Premium() {
  return (
    <div className="w-screen h-auto bg-nuevo-100">
      <Nav />
      <Inicio />
      <Inter />
      <Proyectos/>
      <InterLow/>
      <AboutInter/>
      <AboutMe/>
      <Contacto/>
    </div>
  );
}
