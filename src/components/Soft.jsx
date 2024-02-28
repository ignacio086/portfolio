"use client";

import { Lato } from "next/font/google";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });

export default function Soft() {
  return (
    <section id="soft" className="w-screen gap-12 flex flex-col bg-slate-200 p-24">
      <h1 className="letra" style={lato.style}>
        Habilidades Blandas
      </h1>
      <div className="w-screen gap-12 justify-center items-center flex flex-col">
        <div className="w-screen flex gap-12 items-center justify-center">
          <motion.div className="w-1/2" initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <div className="w-full h-full ">
            <Player
          src="https://lottie.host/763694ac-c597-4feb-adc3-88ae52246395/JvbJOj4EVZ.json"
          style={{ width: "70%", height: "70%" }}
          autoplay
          loop
        />
            </div>
          </motion.div>
          <motion.div className="w-1/2 flex flex-col gap-12" initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <h1 className="letra2" style={lato.style}>BUENA<br></br>COMUNICACION</h1>
            <p className="w-1/2">
              Capaz de compartir ideas, pensamientos, conocimientos e información de la forma más comprensible para mis compañeros,
              usando claridad, empatía y escucha activa.
            </p>
          </motion.div>
        </div>
        <div className="w-screen flex flex-row-reverse gap-12 items-center justify-center">
          <motion.div className="w-1/2 mr-24" initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <div className="w-full h-full ">
            <Player
          src="https://lottie.host/f9ee2ea4-87fb-46b1-ab85-7b646d4ec4cc/trwkhv70DL.json"
          style={{ width: "100%", height: "100%" }}
          autoplay
          loop
        />
            </div>
          </motion.div>
          <motion.div className="w-1/2 flex flex-col gap-12" initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <h1 className="letra3" style={lato.style}>TRABAJO<br></br>EN<br></br>EQUIPO</h1>
            <p className="w-2/3">
              Capaz de participar activamente, aportando ideas para realizar una meta en común, subordinando los intereses personales a los objetivos del equipo.
            </p>
          </motion.div>
        </div>
        <div className="w-screen flex gap-12 items-center justify-center">
          <motion.div className="w-1/2" initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <div className="w-full h-full ">
            <Player
          src="https://lottie.host/dd4c0f90-13a9-4a7f-9e6a-eb61cfcfc54e/KSSoWH8usR.json"
          style={{ width: "70%", height: "70%" }}
          autoplay
          loop
        />
            </div>
          </motion.div>
          <motion.div className="w-1/2 flex flex-col gap-12" initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <h1 className="letra4" style={lato.style}>RAPIDO<br></br>APRENDIZAJE</h1>
            <p className="w-1/2">
              Capaz de adquirir y procesar nueva informacion de manera efectiva y eficiente, no solamente aprendizaje académico, sino tambien aplicado a situaciones de la vida cotidiana y profesional.
            </p>
          </motion.div>
        </div>
        <div className="w-screen flex flex-row-reverse gap-12 items-center justify-center">
          <motion.div className="w-1/2 mr-24" initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <div className="w-full h-full ">
            <Player
          src="https://lottie.host/106f69a6-23b0-48ba-82d0-39b9c2ad1023/FBtQuoOMPR.json"
          style={{ width: "70%", height: "70%" }}
          autoplay
          loop
        />
            </div>
          </motion.div>
          <motion.div className="w-1/2 flex flex-col gap-12" initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <h1 className="letra5" style={lato.style}>PROACTIVO</h1>
            <p className="w-2/3">
              Capaz de asumir mi propia responsabilidad,tomar la iniciativa y, ante determinadas situaciones retadoras, tener un comportamiento claramente anticipatorio, buscando las posibles soluciones y las consecuentes acciones.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
