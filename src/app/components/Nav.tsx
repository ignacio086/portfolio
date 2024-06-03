"use client";
import { motion} from "framer-motion";



export default function Nav() {


  return (
    <div
      className="flex justify-around items-center text-black w-screen h-24 bg-nuevo-100"
    >

     <motion.a  initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0}}   href="#iniciopremium" className="">Inicio</motion.a>
     <motion.a initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0.4}} href="#proyectospremium" className="">Proyectos</motion.a>
     <motion.a initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0.4}} href="#aboutpremium" className="">Sobre Mi</motion.a>
     <motion.a initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0.8}} href="contactopremium" className="">Contacto</motion.a>
    </div>
  );
}