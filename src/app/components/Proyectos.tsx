"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Oswald } from "next/font/google";
import { FaGithub, FaLink } from "react-icons/fa";

const oswald = Oswald({ subsets: ["latin"] });
export default function Proyectos() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="w-screen h-[200vh] lg:mt-0 lg:h-[300vh] p-2 lg:p-8 bg-nuevo-300"
      id="proyectospremium"
    >
      <div className="w-screen gap-64 h-[300vh] flex flex-col items-center  p-8">
        <motion.div style={{ y: y }} className="w-screen sticky top-0 h-24 ">
          <h1
            style={oswald.style}
            className="text-8xl mt-24 lg:mt-0 lg:text-9xl text-nuevo-100"
          >
            {" "}
            PROYECTOS
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" h-96 w-full lg:w-3/4 flex gap-2 justify-center items-center bg-nuevo-100/20 backdrop-blur-xl rounded-xl shadow-[#33605a_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-8 z-10"
        >
          <div className="w-2/3 flex flex-col gap-4 h-full p-8 text-nuevo-400">
            <h1 style={oswald.style} className="text-nuevo-400 text-4xl">
              IG-WEB
            </h1>
            <p className="text-xs">REACT.JS / JavaScript</p>
            <p className="text-xs lg:text-lg">
              Páginas web creadas con HTML5, CSS3, JavaScript y React, con el
              objetivos de promover a negocios locales.
            </p>
            <div className="flex gap-2">
              <a href="https://github.com/ignacio086/Laura-fotografia" className="text-nuevo-400 border-2 bg-nuevo-100 border-nuevo-500 p-2 rounded-xl gap-2 text-xs cursor-pointer transition hover:bg-nuevo-500 hover:text-nuevo-100 hover:border-nuevo-100 w-32 justify-center flex ">
                Repositorio <FaGithub className="h-full text-lg" />
              </a>
            </div>
          </div>
          <div className="w-1/3 h-1/2 bg-[url('/fotografia.png')] bg-cover bg-no-repeat bg-center rounded-xl"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:mr-96 h-96 w-full lg:w-3/4 flex gap-2 justify-center items-center bg-nuevo-100/20 backdrop-blur-xl rounded-xl shadow-[#33605a_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-8 z-10"
        >
          <div className="w-2/3 flex flex-col gap-4 h-full p-8 text-nuevo-400">
            <h1 style={oswald.style} className="text-nuevo-400 text-4xl">
              IG-STOCK
            </h1>
            <p className="text-xs">NEXT.JS / MySQL</p>
            <p className="text-xs lg:text-lg">
              Gestor de stock y ventas realizada con Next.js y MySql, capaz de
              organizar productos, ventas y arqueos de un negocio a traves de
              una API creada y consumida con Next.js.
            </p>
            <div className="flex gap-2">
              <a href="https://g-stock.vercel.app/" className="text-nuevo-400 border-2 bg-nuevo-100 border-nuevo-500 p-2 rounded-xl text-xs gap-2 cursor-pointer transition hover:bg-nuevo-500 hover:text-nuevo-100 hover:border-nuevo-100 w-32 justify-center flex ">
                Web <FaLink className="h-full text-lg" />
              </a>
            </div>
          </div>
          <div className="w-1/3 h-1/2 bg-[url('/ventas.png')] bg-cover bg-no-repeat bg-center rounded-xl"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:ml-72 h-96 w-full lg:w-3/4 flex gap-2 justify-center items-center bg-nuevo-100/20 backdrop-blur-xl rounded-xl shadow-[#33605a_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-8 z-10"
        >
          <div className="w-2/3 flex flex-col gap-4 h-full p-8 text-nuevo-400">
            <h1 style={oswald.style} className="text-nuevo-400 text-4xl">
              IG-ECOMMERCE
            </h1>
            <p className="text-xs">NEXT.JS / TYPESCRIPT</p>
            <p className="text-xs lg:text-lg">
              Proyecto de e-commerce realizado con T3 stack, capaz de llevar un
              negocio de forma digital, con métodos de pago y carrito de
              compras.
            </p>
            <div className="flex gap-2">
              <a href="https://github.com/ignacio086/e-commerce" className="text-nuevo-400 border-2 bg-nuevo-100 border-nuevo-500 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-500 hover:text-nuevo-100 hover:border-nuevo-100 w-32 justify-center flex gap-2">
                Repositorio <FaGithub className="h-full text-lg" />
              </a>
            </div>
          </div>
          <div className="w-1/3 h-1/2 bg-[url('/tribu.png')] bg-cover bg-no-repeat bg-center rounded-xl"></div>
        </motion.div>
      </div>
    </div>
  );
}
