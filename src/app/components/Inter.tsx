"use client";
import { motion } from "framer-motion";


export default function Inter() {

  return (
    <div
      className="flex justify-end w-screen h-80 lg:h-screen p-8 bg-gradient-to-tr from-nuevo-300 from-50% to-nuevo-100 to-50%"
    >
     <motion.p initial={{opacity:0,y:-200}} transition={{duration:0.5}} whileInView={{opacity:1,y:-300}} className="text-black text-md lg:text-xl text-center w-1/2 lg:w-1/3 h-full"> Bienvenidos a mi portfolio! Aquí podrás ver mis proyectos, conocerme un poco más y poder contactarme para cualquier consulta o simplemente charlar. Que lo disfruten!</motion.p>
    </div>
  );
}