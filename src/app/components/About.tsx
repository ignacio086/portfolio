"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Oswald } from "next/font/google";
import { FaGithub, FaLink } from "react-icons/fa";

const oswald = Oswald({ subsets: ["latin"] });

export default function AboutMe() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className="w-screen h-[200vh] text-xs lg:text-xl lg:mt-0 lg:h-[300vh] p-2 flex lg:p-8 bg-nuevo-100"
      id="aboutpremium"
    >
      <motion.div
        style={{ height: y }}
        className="w-4 bg-nuevo-500 rounded-xl sticky top-4 "
      ></motion.div>
      <aside className="h-full flex flex-col items-center justify-around">
        <motion.div
          className=" w-3/4 lg:w-1/2 h-auto gap-4 lg:gap-20 flex items-center justify-around"
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            className="w-3/5 lg:w-2/3 h-2/3 rounded"
            alt="hola"
            src={"/tribu.jpeg"}
          />
          <div>
            <p className="text-xs">
              <strong>Desarrollador en Tribu Sustentable</strong>
            </p>
            <p className="text-xs">Abril 2021 - Diciembre 2023</p>
            <h1 className="mt-12">
              Realicé la creación, optimización y organización del e-commerce de
              Tribü, el cual ofrecía productos sustentables de emprendimientos
              autóctonos de mi provincia.
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="w-3/4 lg:w-1/2 h-auto gap-4 lg:gap-20 flex items-center justify-around"
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <video
            className="shadow-[#33605a_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] w-full h-96"
            src="/tiktok.mp4"
            controls
          ></video>
          <div>
            <p className="text-xs">
              <strong>Profesor Mendoza Futura</strong>
            </p>
            <p className="text-xs">Abril 2022 - Agosto 2023</p>
            <h1 className="mt-12">
              Dicté clases de Desarrollo Web, Arduino y Análisis de Datos en
              Lavalle, Mendoza, siendo parte del programa Mendoza Futura en las
              etapas 3 y 4, en las cuales como objetivo final fue construir un
              jardin de hidroponia.
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="w-3/4 lg:w-1/2 h-auto gap-4 lg:gap-20 flex items-center justify-around"
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            className="w-3/5 lg:w-2/3 h-2/3 rounded"
            alt="hola"
            src={"/presente.jpeg"}
          />
          <div>
            <p className="text-xs">
              <strong>Desarrollador Freelance</strong>
            </p>
            <p className="text-xs">Diciembre 2023 - Actualizad</p>
            <h1 className="mt-12">
              Actualmente me trabajo como Desarrollador Freelance, creando
              soluciones innovadoras para diversos clientes que buscan mejorar
              sus negocios y obtener visibilidad y una mejor gestión del mismo.
            </h1>
          </div>
        </motion.div>
      </aside>
    </div>
  );
}
