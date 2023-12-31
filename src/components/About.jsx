'use client'
import Link from "next/link"
import {BsInstagram , BsLinkedin , BsGithub } from 'react-icons/bs'
import { motion } from "framer-motion"
export default function About(){
    return(
        <div id='sobremi'className="snap-center h-screen w-screen bg-white flex flex-row  items-center justify-center">
        <div className="w-1/2 h-1/4 md:h-full flex justify-center items-center">
          <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} viewport={{once:true}} className="bg-slate-800 rounded-full w-1/2 h-1/2 flex items-center juistify-center text-center flex-row">
            <div className="w-full">
              <h1 className="text-white text-center text-lg md:text-2xl">Sobre Mi</h1>
            </div>
          </motion.div>
        </div>
        <div className="w-2/3 h-1/4 md:h-full md:w-1/2  flex justify-center items-center">
          <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:2}} viewport={{once:true}}  className="bg-slate-800 rounded-full w-5/6 h-5/6 flex items-center juistify-center text-center flex-row">
            <div className="p-4 md:p-24 w-full ">
              <p className="text-white text-xs md:text-lg">Tengo 24 años y soy de Mendoza, Argentina. Empece a programar como hobbie despues de estudiar de forma autodidacta. Al final este pasatiempo paso a ser mi trabajo.</p>
            </div>
          </motion.div>
        </div>
      </div>
    )
}