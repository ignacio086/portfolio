"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
import Link from "next/link";
import { FaPaperclip } from "react-icons/fa6";
import {
  IoIosMail,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";

// ⬇️ import dinámico del Player, solo en cliente
const Player = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const oswald = Oswald({ subsets: ["latin"] });

export default function Contacto() {
  return (
    <div
      className="w-screen h-[200vh] text-xs lg:text-xl lg:mt-0 lg:h-[200vh] flex justify-around flex-col lg:p-8 bg-nuevo-100"
      id="contactopremium"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        style={oswald.style}
        className="w-screen text-center text-7xl lg:text-9xl h-auto flex items-center justify-center text-nuevo-500"
      >
        GRACIAS POR VER ESTE PORTFOLIO.
      </motion.div>
      <div className="w-screen p-8 h-auto flex flex-col gap-20">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          style={oswald.style}
          className="text-7xl lg:text-9xl text-nuevo-500"
        >
          CONTACTO
        </motion.h1>
        <div className="flex flex-col lg:flex-row items-center justify-center p-8 w-screen h-auto text-xs lg:text-xl">
          <div className="flex flex-col items-center justify-center gap-2 h-40 w-1/5">
            <Player
              src="https://lottie.host/989ff8ea-9ba3-4220-8f65-3eb257cff6da/re0WCshB8M.json"
              style={{ width: "80%", height: "80%" }}
              autoplay
              loop
            />
            <Link
              href="https://wa.me/5492634782743"
              className="text-nuevo-100 border-2 bg-nuevo-300 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-100 hover:text-nuevo-500 hover:border-nuevo-500 w-32 text-center flex gap-2"
            >
              <IoLogoWhatsapp className="h-full text-lg" />
              WHATSAPP
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 h-40 w-1/5">
            <Player
              src="https://lottie.host/480ff09e-4a78-466d-95b5-3ed98d739a4b/t1mMeQNyTA.json"
              style={{ width: "80%", height: "80%" }}
              autoplay
              loop
            />
            <Link
              href="https://github.com/ignacio086"
              className="text-nuevo-100 border-2 bg-nuevo-300 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-100 hover:text-nuevo-500 hover:border-nuevo-500 w-32 text-center flex gap-2"
            >
              <IoLogoGithub className="h-full text-lg" />
              GITHUB
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 h-40 w-1/5">
            <Player
              src="https://lottie.host/4a420bd4-33f1-439f-877e-4d25312e0614/TDY4a9hPwA.json"
              style={{ width: "80%", height: "80%" }}
              autoplay
              loop
            />
            <Link
              href="https://www.linkedin.com/in/ignaciogomez-devfullstack/"
              className="text-nuevo-100 border-2 bg-nuevo-300 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-100 hover:text-nuevo-500 hover:border-nuevo-500 w-32 text-center flex gap-2"
            >
              <IoLogoLinkedin className="h-full text-lg" />
              LINKEDIN
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 h-40 w-1/5">
            <Player
              src="https://lottie.host/116bdb3b-87ee-4c4f-9082-a6c60325a527/VnoMvPi05P.json"
              style={{ width: "80%", height: "80%" }}
              autoplay
              loop
            />
            <Link
              href="mailto:ignaarigomez@gmail.com"
              className="text-nuevo-100 border-2 bg-nuevo-300 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-100 hover:text-nuevo-500 hover:border-nuevo-500 w-32 text-center flex gap-2"
            >
              <IoIosMail className="h-full text-lg" />
              CORREO
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 h-40 w-1/5">
            <Player
              src="https://lottie.host/93d97c2b-b425-4005-b472-28b02f09a9e7/rfnJnz7fUr.json"
              style={{ width: "80%", height: "80%" }}
              autoplay
              loop
            />
            <Link
              href="/Ignacio Gomez(es) - Analista de Datos _ React _ JavaScript _ Web Developer - CV port.pdf"
              className="text-nuevo-100 border-2 bg-nuevo-300 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-100 hover:text-nuevo-500 hover:border-nuevo-500 w-32 text-center flex gap-2"
            >
              <FaPaperclip className="h-full text-lg" />
              CURRICULUM
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
