"use client";

import { Lato } from "next/font/google";
import { TimelineComponent } from "./time";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });

export default function Experiencia() {
  return (
    <section id="experiencia" className="w-screen  flex bg-slate-200 p-24">
      <div className="h-auto w-1/2 flex items-center justify-center">
        <div className="h-auto w-1/2 text-center ">
         <video className="shadow-[-10px_-10px_0px_rgba(255,255,255,1)]" src="/tiktok.mp4" controls></video>
         <p className="text-xs">Video grabado con mis alumnos de Mendoza Futura</p>
        </div>
      </div>
      <div className=" w-1/2 flex  flex-col justify-center gap-12">
       <h1 className="letra" style={lato.style}>
        EXPERIENCIA
       </h1>
        <TimelineComponent />
      </div>
    </section>
  );
}
