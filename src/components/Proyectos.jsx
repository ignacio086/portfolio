/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Lato } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });

export default function Proyectos({lang}) {
  const [cuadro, setCuadro] = useState("lay1");
  return (
    <section id="proyectos" className="flex flex-col items-center justify-center bg-slate-200 p-24 ">
      <motion.h1 initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:1}} className="text-4xl letra lg:text-8xl" style={lato.style}>
        {lang.title}
      </motion.h1>
      <motion.div initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:1}} className="w-screen h-screen flex flex-col lg:grid gap-2 lg:grid-rows-6 lg:grid-cols-2 p-12">
        <motion.div
          layout
          className={`p-12 text-white bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl flex flex-col items-center justify-evenly ${
            cuadro == "lay1" ? "row-span-6" : "row-span-2"
          } `}
        >
          <h1 className={`text-5xl`} style={lato.style}>IG-WEB</h1>
          <p className={cuadro == "lay1" ? "" : "hidden"}>
            {lang.webcontent}
          </p>
          <img
            src="/fotografia.png"
            className={`h-1/2 rounded-xl ${cuadro == "lay1" ? "" : "hidden"}`}
          ></img>
          <div className="flex gap-2">
            <a className={`p-2  bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl ${cuadro == "lay1" ? "" : "hidden"}`} href='https://github.com/ignacio086/Laura-fotografia'>{lang.repo}</a>
          <button
            onClick={() => {
              setCuadro("lay1");
            }}
            className="p-2  bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl "
          >
            {lang.boton}
          </button>
          </div>
        </motion.div>
        <motion.div
          layout
          className={`p-12 text-white bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl flex flex-col items-center justify-evenly ${
            cuadro == "lay2" ? "row-span-6" : "row-span-2"
          } `}
        >
          <h1 className={`text-5xl `} style={lato.style}>IG-STOCK</h1>
          <p className={cuadro == "lay2" ? "" : "hidden"}>
          {lang.stockcontent}
          </p>
          <img
            src="/ventas.png"
            className={`h-1/2 rounded-xl ${cuadro == "lay2" ? "" : "hidden"}`}
          ></img>
          <div className="flex gap-2">
            <a className={` p-2  bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl ${cuadro == "lay2" ? "" : "hidden"}`} href='https://g-stock.vercel.app/'>Web</a>
          <button
            onClick={() => {
              setCuadro("lay2");
            }}
            className="bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 p-2 rounded-xl "
          >
            {lang.boton}
          </button>
          </div>
        </motion.div>
        <motion.div
          layout
          className={`p-12 text-white bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl flex flex-col items-center justify-evenly ${
            cuadro == "lay3" ? "row-start-1 row-end-7 col-start-2 col-end-3" : "row-span-2"
          } `}
        >
          <h1 className={`text-5xl `} style={lato.style}>IG-ECOMMERCE</h1>
          <p className={cuadro == "lay3" ? "" : "hidden"}>
          {lang.ecommercecontent}
          </p>
          <img
            src="/tribu.png"
            className={`h-1/2 rounded-xl ${cuadro == "lay3" ? "" : "hidden"}`}
          ></img>
          <div className="flex gap-2">
            <a className={`p-2  bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl ${cuadro == "lay3" ? "" : "hidden"}`} href='https://github.com/ignacio086/e-commerce'>{lang.repo}</a>
          <button
            onClick={() => {
              setCuadro("lay3");
            }}
            className="p-2  bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl "
          >
            {lang.boton}
          </button>
          </div>
        </motion.div>
        <motion.div
          layout
          className={`p-12 text-white bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl flex flex-col items-center justify-evenly ${
            cuadro == "lay4" ? "row-start-1 row-end-7" : "row-span-2"
          } `}
        >
          <h1 className={`text-5xl `} style={lato.style}>IG-TASK</h1>
          <p className={cuadro == "lay4" ? "" : "hidden"}>
          {lang.taskcontent}
          </p>
          <img
            src="/tasks.png"
            className={`h-1/2 rounded-xl ${cuadro == "lay4" ? "" : "hidden"}`}
          ></img>
          <div className="flex gap-2">
            <a className={` bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl p-2 ${cuadro == "lay4" ? "" : "hidden"}`} href='https://github.com/ignacio086/Task-app'>{lang.repo}</a>
          <button
            onClick={() => {
              setCuadro("lay4");
            }}
            className="p-2 bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/20 border-gray-900 border-2 rounded-xl "
          >
            {lang.boton}
          </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
