"use client";
import Link from "next/link";
import { FaCss3, FaHtml5, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs, TbBrandMongodb, TbBrandMysql } from "react-icons/tb";
import { motion } from "framer-motion";
export default function Experiencia() {
  return (
    <div
      id="trabajos"
      className="flex flex-row  items-center justify-center m-4 snap-center h-screen w-screen bg-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="h-2/3 md:h-screen w-screen bg-white grid grid-cols-3 grid-rows-3 md:gap-3 md:p-12"
      >
        <div className="flex flex-col justify-center items-center rounded-xl bg-slate-100 border-2 col-span-3 bg-gradient-to-t from-slate-600 to-slate-200">
          <h1 className="text-md md:text-3xl text-white">Trabajos</h1>
          <p className="text-xs md:text-md text-white">
            Realizados a lo largo de mi carrera como programador
          </p>
        </div>
        <div
          className="rounded-xl bg-slate-100 border-2 row-span-2  bg-contain  bg-no-repeat bg-top"
          style={{ backgroundImage: "url('gstock.png')" }}
        >
          <div
            className=" gap-2 p-2 md:gap-4 md:p-8 text-center flex flex-col justify-end items-center rounded-xl w-full h-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.8408613445378151) 62%, rgba(248,250,252,0) 100%)",
            }}
          >
            <h1 className="text-xs md:text-3xl text-white">G-Stock</h1>
            <p className="text-xs md:text-md text-white">
              Pagina Web realizada para comprar y publicitar una app para
              control de stock.
            </p>
            <div className="text-white flex gap-4 md:text-lg">
              <TbBrandNextjs />
            </div>
            <Link
              className="text-xs md:text-md text-white underline hover:underline-offset-4"
              href="https://g-stock.vercel.app/"
            >
              Conocer Mas
            </Link>
          </div>
        </div>
        <div
          className="rounded-xl bg-slate-100 border-2 row-span-3  bg-contain  bg-no-repeat bg-top"
          style={{ backgroundImage: "url('ventas.png')" }}
        >
          <div
            className=" gap-2 p-2 md:gap-4 md:p-8 text-center flex flex-col justify-end items-center rounded-xl w-full h-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.8408613445378151) 62%, rgba(248,250,252,0) 100%)",
            }}
          >
            <h1 className="text-xs md:text-3xl text-white">Stock</h1>
            <p className="text-xs md:text-md text-white">
              Producto realizado para controlar stock, ventas y arqueos de un
              negocio.
            </p>
            <div className="text-white flex gap-4 md:text-lg">
              <TbBrandNextjs />
              <TbBrandMysql />
            </div>
            <Link
              className="text-xs md:text-md text-white underline hover:underline-offset-4"
              href="https://stock-cotillon-ia3x3rryp-ignacio086s-projects.vercel.app/"
            >
              Conocer Mas
            </Link>
          </div>
        </div>
        <div
          className="rounded-xl bg-slate-100 border-2 bg-contain  bg-no-repeat bg-top"
          style={{ backgroundImage: "url('tragos.png')" }}
        >
          <div
            className="md:gap-2 md:p-4 text-white text-center flex flex-col justify-end items-center rounded-xl w-full h-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.8408613445378151) 12%, rgba(248,250,252,0) 100%)",
            }}
          >
            <h1 className="text-xs md:text-3xl text-white">TRAGOS</h1>
            <p className="text-xs md:text-md">
              Muestra tarjetas de tragos consumidos a traves de una API
            </p>
            <div className=" flex gap-4 text-lg">
              <FaReact />
              <SiRedux />
            </div>
            <Link
              className="text-xs md:text-md underline hover:underline-offset-4"
              href="https://github.com/ignacio086/Prueba-tecnica-ADEN"
            >
              Conocer Mas
            </Link>
          </div>
        </div>
        <div
          className="rounded-xl bg-slate-100 border-2 row-span-2 bg-contain  bg-no-repeat bg-top"
          style={{ backgroundImage: "url('tribu.png')" }}
        >
          <div
            className="md:gap-2 md:p-8  text-white text-center flex flex-col justify-end items-center rounded-xl w-full h-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.8408613445378151) 12%, rgba(248,250,252,0) 100%)",
            }}
          >
            <h1 className="text-md md:text-3xl text-white">TRIBU</h1>
            <p className="text-xs md:text-md">
              Marketplace de productos sustentables de Mendoza.
            </p>
            <div className=" flex gap-4 text-lg">
              <FaWordpress />
            </div>
            <Link
              className="text-xs md:text-md underline hover:underline-offset-4"
              href="https://tribusustentable.com/"
            >
              Conocer Mas
            </Link>
          </div>
        </div>
        <div
          className="rounded-xl bg-slate-100 border-2 bg-contain  bg-no-repeat bg-top"
          style={{ backgroundImage: "url('fotografia.png')" }}
        >
          <div
            className="md:gap-2 md:p-4 text-white text-center flex flex-col justify-end items-center rounded-xl w-full h-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.8408613445378151) 22%, rgba(248,250,252,0) 100%)",
            }}
          >
            <h1 className="text-md md:text-3xl text-white">FOTOGRAFIAS</h1>
            <p className="text-xs md:text-md">
              Pagina Web para Laura Becerra, fotografa de Mendoza.
            </p>
            <div className=" flex gap-4 text-lg">
              <FaHtml5 />
              <FaCss3 />
              <FaJs />
            </div>
            <Link
              className="text-xs md:text-md underline hover:underline-offset-4"
              href="https://github.com/ignacio086/Task-app"
            >
              Conocer Mas
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
