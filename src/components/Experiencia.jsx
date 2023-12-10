'use client'
import Link from "next/link"

import { motion } from "framer-motion"
export default function Experiencia(){
    return(
        <div id='experiencia' className="snap-center h-screen w-screen bg-white flex flex-col pt-12">
        <div className="w-screen h-1/5 flex flex-row">
          <motion.div initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:[-200,0]}} transition={{duration:2,delay:0}} viewport={{once:true}} className="w-1/2 h-full bg-gray-900 flex justify-center items-center">
            <h1 className="text-white text-2xl">EXPERIENCIA</h1>
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,delay:0}} viewport={{once:true}} className="w-1/2 h-full bg-white flex justify-center items-center">
          </motion.div>
        </div>
        <div className="w-screen h-1/5 flex flex-row">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,delay:0.5}} viewport={{once:true}} className="w-1/2 h-full bg-white flex flex-col justify-center text-center items-center">
            <p className="text-xs">Creado con NextJS y MongoDB. Una app realizada para crear,editar y borrar tareas</p>
            <Link className="underline hover:underline-offset-4" href="https://github.com/ignacio086/Task-app">Conocer Mas</Link>
          </motion.div>
          <motion.div initial={{opacity:0,x:200}} whileInView={{opacity:1,x:[200,0]}} transition={{duration:2,delay:0.5}} viewport={{once:true}} className="w-1/2 h-full bg-gray-900 flex justify-center text-center items-center">
            <h1 className="text-white text-2xl">App de Tareas</h1>
          </motion.div>
        </div>
        <div className="w-screen h-1/5 flex flex-row">
          <motion.div initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:[-200,0]}} transition={{duration:2,delay:1}} viewport={{once:true}} className="w-1/2 h-full bg-gray-900 flex justify-center text-center items-center">
            <h1 className="text-white text-2xl">Diseño Web</h1>
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,delay:1}} viewport={{once:true}} className="p-4 w-1/2 h-full bg-white flex flex-col justify-center text-center items-center">
            <p className="text-xs">Creado con HTML, CSS y JS. Pagina Web para Laura Becerra, fotografa de Mendoza.</p>
            <Link className="underline hover:underline-offset-4" href="https://github.com/ignacio086/Laura-fotografia">Conocer Mas</Link>
          </motion.div>
        </div>
        <div className="w-screen h-1/5 flex flex-row">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,delay:1.5}} viewport={{once:true}} className="p-4 w-1/2 h-full bg-white flex flex-col justify-center text-center items-center">
            <p className="text-xs">Creado con WordPress. Marketplace de productos sustentables de Mendoza.</p>
            <Link className="underline hover:underline-offset-4" href="https://tribusustentable.com/">Conocer Mas</Link>
          </motion.div>
          <motion.div initial={{opacity:0,x:200}} whileInView={{x:[200,0],opacity:1}} transition={{duration:2,delay:1.5}} viewport={{once:true}} className="w-1/2 h-full bg-gray-900 flex justify-center items-center">
            <h1 className="text-white text-2xl">TRIBÜ</h1>
          </motion.div>
        </div>
        <div className="w-screen h-1/5 flex flex-row">
          <motion.div initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:[-200,0]}} transition={{duration:2,delay:0}} viewport={{once:true}} className="w-1/2 h-full bg-gray-900 flex justify-center items-center">
            <h1 className="text-white text-2xl">Tragos</h1>
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2,delay:1.5}} viewport={{once:true}} className="p-4 w-1/2 h-full bg-white flex flex-col justify-center text-center items-center">
            <p className="text-xs">Creado con React, Axios y Redux. Muestra tarjetas de tragos consumidos a traves de una API</p>
            <Link className="underline hover:underline-offset-4" href="https://github.com/ignacio086/Prueba-tecnica-ADEN">Conocer Mas</Link>
          </motion.div>
        </div>
      </div>
    )
}