"use client";

import { Lato } from "next/font/google";
import { TimelineComponent } from "./time";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });

export default function Experiencia({ lang }) {
  return (
    <section id="experiencia" className="w-screen  flex flex-col-reverse lg:flex-row bg-slate-200 p-24">
      <div className="h-auto w-full lg:w-1/2 flex items-center justify-center">
        <div className="h-auto w-1/2 text-center ">
          <video className="shadow-[-10px_-10px_0px_rgba(255,255,255,1)]" src="/tiktok.mp4" controls></video>
          <p className="text-xs">{lang.sub}</p>
        </div>
      </div>
      <div className=" w-full lg:w-1/2 flex  flex-col justify-center gap-12">
        <h1 className="text-4xl letra lg:text-8xl" style={lato.style}>
          {lang.title}
        </h1>
        <TimelineComponent lang={lang} />
      </div>
    </section>
  );
}
