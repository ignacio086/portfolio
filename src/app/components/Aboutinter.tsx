"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });
export default function AboutInter() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const y = useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]);
  const sca = useTransform(scrollYProgress, [0, 1], ["0", "1"]);
  const roun = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div
      ref={targetRef}
      style={oswald.style}
      className="flex flex-col text-black w-screen h-[200vh] bg-nuevo-100"
      id="aboutpremium"
    >
      <motion.div className=" w-screen items-center sticky top-0  h-screen bg-nuevo-300 flex p-24 justify-end">
        <motion.h1
          style={{ opacity: roun }}
          className="text-center text-9xl text-nuevo-100"
        >
          {" "}
          SOBRE MI
        </motion.h1>
      </motion.div>
      <motion.div
        style={{ y: y, scale: sca, borderRadius: roun }}
        className="absolute  w-screen items-center  z-10 h-screen bg-nuevo-100 flex p-24 justify-end"
      >
        <motion.h1 style={{ opacity: y }} className="text-center text-9xl text-nuevo-400">
          {" "}
          SOBRE MI
        </motion.h1>
      </motion.div>
    </div>
  );
}
