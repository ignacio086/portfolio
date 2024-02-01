"use client";
import Link from "next/link";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div
      id="sobremi"
      className="snap-center bg-gradient-to-tr from-gray-900 from-50% via-gray-900 from-50% to-slate-100/0 to-50%  h-screen w-screen bg-white flex flex-row  items-center justify-center"
    >
      <div className="w-full h-full md:h-full  flex flex-col px-10 py-32 ">
        <h1 className="text-9xl"><span className="text-white">Sobre</span><span className="text-gray-900"> mi</span></h1>
        <p className="w-1/3 text-white pt-24 text-xl">      Tengo 24 años y soy de Mendoza, Argentina. Empece a programar como
              hobbie despues de estudiar de forma autodidacta. Al final este
              pasatiempo paso a ser mi trabajo.</p>
      </div>
    </div>
  );
}
