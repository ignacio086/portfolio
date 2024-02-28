"use client";

import { Lato } from "next/font/google";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";
import Link from "next/link";
import { TbArrowDown, TbMail } from "react-icons/tb";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="w-screen flex gap-24 justify-center h-screen bg-slate-200 p-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="letra"
        style={lato.style}
      >
        {" "}
        Contacto
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="rounded-xl bg-sky-500 border-2 border-gray-900  w-1/2 h-full"
      >
        <div className="rounded-xl flex flex-col items-center justify-evenly bg-slate-100/20 backdrop-blur-xl w-full h-full">
          <h1 className="text-5xl text-white" style={lato.style}>
            {" "}
            Ignacio Gomez
          </h1>
          <img
            className="rounded-full w-48 h-48 border-2 border-gray-900"
            src="/profile.jpeg"
          ></img>
          <div className="flex w-1/2 justify-evenly">
            <a href="https://github.com/ignacio086" className="text-xl">
              <SiGithub />
            </a>
            <a
              href="www.linkedin.com/in/ignaciogomez-devfullstack"
              className="text-xl"
            >
              <SiLinkedin />
            </a>
            <a href="www.instagram.com/igna_gomez93" className="text-xl">
              <SiInstagram />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=542634782743&text=Bienvenido+a+mi+whatsapp+-+Ignacio+Gomez"
              className="text-xl"
            >
              <SiWhatsapp />
            </a>
            <button
              onClick={() => {
                alert("Correo: ignaarigomez@gmail");
              }}
              className="text-xl"
            >
              <TbMail />
            </button>
          </div>
          <Link
            href="/Ignacio Gomez(es) - NextJS _ React _ JavaScript _ Web Developer - CV.pdf"
            style={lato.style}
            className="w-1/2 rounded-xl p-2 bg-slate-100/20 border-b-2 border-r-2 border-gray-900 text-center"
          >
            Descargar Curriculum Vitae-es
          </Link>
          <Link
            href="/Ignacio Gomez(en) - NextJS _ React _ JavaScript _ Web Developer - CV.pdf"
            style={lato.style}
            className="w-1/2 rounded-xl p-2 bg-slate-100/20 border-b-2 border-r-2 border-gray-900 text-center"
          >
            Descargar Curriculum Vitae-en
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
