'use client'
import Link from "next/link"
import {BsInstagram , BsLinkedin , BsGithub } from 'react-icons/bs'
import { motion } from "framer-motion"
export default function Inicio(){
    return(
        <div id='inicio'className="snap-center h-screen w-screen bg-white flex flex-row items-center justify-center">
        <motion.div initial={{x:-100 , opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:2}} viewport={{once:true}} className='h-2 bg-gray-900 w-1/3'></motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:[0,0,1,1]}} transition={{duration:4}} viewport={{once:true}} className='h-1/5 w-2/4 md:h-2/3 bg-gray-900 md:w-1/3 rounded-full p-2'>
          <div className='h-full bg-white w-full rounded-full flex flex-col items-center justify-center text-center gap-2'>
            <h1 className="text-2xl">IGNACIO GOMEZ</h1>
            <h1>Web Developer</h1>
            <div className="w-1/2 h-4 flex flex-row items-center justify-center gap-4">
              <Link className='hover:h-6 duration-100'href="https://github.com/ignacio086"><BsGithub/></Link>
              <Link className='hover:h-6 duration-100'href="https://www.instagram.com/igna_gomez93/"><BsInstagram/></Link>
              <Link className='hover:h-6 duration-100'href="www.linkedin.com/in/ignacio-gomez-91b838237"><BsLinkedin/></Link>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{x:100 , opacity:0}} whileInView={{x:0, opacity:1  }} viewport={{once:true}} transition={{duration:2 }}  className='h-2 bg-gray-900  w-1/3'></motion.div>
      </div>
    )
}