"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Oswald } from "next/font/google";
import { FaAngleDown } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
const oswald = Oswald({ subsets: ["latin"] });
export default function Inicio() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacidad = useTransform(scrollYProgress, [0, 1], ["1", "0"]);

  return (
    <div
      ref={targetRef}
      className="flex justify-end w-screen h-[200vh] mt-40 lg:mt-0 lg:h-[300vh] bg-nuevo-100"
      id="iniciopremium"
    >
      <motion.div
        style={{ y: y }}
        className="sticky w-1/2 lg:w-2/3 text-center p-2 lg:p-24 h-screen top-0 left-0 z-10"
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={oswald.style}
          className={` text-4xl lg:text-9xl bg-gradient-to-r from-nuevo-400 from-50% via-slate-50 via-50%   to-slate-50 to-100%  inline-block text-transparent bg-clip-text `}
        >
          IGNACIO GOMEZ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-xs lg:text-xl "
          style={{ opacity: opacidad }}
        >
          Full-stack developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-xs lg:text-xl"
          style={{ opacity: opacidad }}
        >
          Next.js | React | Typescript | TailwindCSS | NestJS
        </motion.p>
        <motion.h1
          className="mt-4 text-xs lg:text-xl"
          style={{ opacity: opacidad }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          SCROLL PARA VER MÁS
        </motion.h1>
        <motion.span
          className="flex items-center justify-center"
          style={{ opacity: opacidad }}
          initial={{ y: 20 }}
          animate={{ y: [0, 20, 0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <FaAngleDown />
        </motion.span>
      </motion.div>
      <motion.div
        style={{ x: x, y: y }}
        className=" w-2/3 lg:w-1/2 h-1/6 lg:h-1/4 sticky top-0 bg-nuevo-300 shadow-[#33605a_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded"
      >
        <motion.div style={{ opacity: opacidad }}>
          <Player
            src="https://lottie.host/361bccf6-7d48-4d12-9ef2-96d2a605d16f/hiPPg7DKV2.json"
            style={{ width: "100%", height: "100%" }}
            autoplay
            loop
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
