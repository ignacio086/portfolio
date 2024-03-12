"use client";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
} from "react-icons/si";
import { Lato } from "next/font/google";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });

export default function Inicio({lang}) {
  return (
    <section id="inicio" className=" w-screen h-screen mt-20 lg:mt-0 bg-sky-500 flex flex-col lg:flex-row">
      <div className="h-screen w-full lg:w-1/2 p-2 lg:p-24 text-white flex flex-col  justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="shadow-xl rounded-xl w-fit p-2"
        >
          <h1 className="text-6xl lg:text-9xl " style={lato.style}>
            IGNACIO
          </h1>
          <h1 className="text-6xl lg:text-9xl" style={lato.style}>
            GOMEZ
          </h1>
        </motion.div>
        <div className="w-full text-center gap-2 flex flex-col lg:text-xl text-md ">
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Full-stack developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full flex flex-col gap-2"
          >
            <p className=" ">Next.js | React | Typescript | TailwindCSS | NestJS</p>
            <div className=" w-full flex justify-evenly">
              <SiNextdotjs />
              <SiReact />
              <SiTypescript />
              <SiTailwindcss />
              <SiNestjs />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-2 items-center justify-center"
        >
          <Link
            href="#"
            className=" hover:bg-sky-500 hover:text-white hover:border-2 hover:border-white border-2 border-sky-500 bg-white rounded-xl text-sky-500 text-s p-2 w-fit "
          >
            {lang.boton}
          </Link>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1, repeat: "infinity" }}
          >
            <TbArrowBigDownLinesFilled />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="h-screen w-full lg:w-1/2 p-8 lg:p-24 flex items-center justify-center"
      >
        <Player
          src="https://lottie.host/6a497038-43e1-4262-8875-13a58adb3b38/USlUjY1LSm.json"
          style={{ width: "100%", height: "100%" }}
          autoplay
          loop
        />
      </motion.div>
    </section>
  );
}
