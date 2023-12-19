'use client'
import Link from "next/link"
import { FaCss3 , FaHtml5 , FaJs , FaReact , FaWordpress } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs , TbBrandMongodb } from "react-icons/tb";
import { motion } from "framer-motion"
export default function Experiencia(){
    return(
      <div  id='experiencia' className="flex flex-row  items-center justify-center m-4 snap-center h-screen w-screen bg-white">
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} className="h-screen w-screen bg-white grid grid-cols-3 grid-rows-3 gap-3 p-12">
        <div className="flex flex-col justify-center items-center rounded-xl bg-slate-100 border-2 col-span-3 bg-gradient-to-t from-slate-600 to-slate-200">
          <h1 className="text-3xl text-white">Experiencia</h1>
          <p className="text-white">Trabajos realizados a lo largo de mi carrera como programador</p>
        </div>
        <div className="rounded-xl bg-slate-100 border-2 row-span-2  bg-contain  bg-no-repeat bg-top" style={{backgroundImage:"url('fotografia.png')"}}>
          <div className=" gap-4 p-8 text-center flex flex-col justify-end items-center rounded-xl w-full h-full" style={{background:'linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.8408613445378151) 62%, rgba(248,250,252,0) 100%)'}}>
            <h1 className="text-3xl text-white">FOTOGRAFIAS</h1>
            <p className="text-white">Pagina Web para Laura Becerra, fotografa de Mendoza.</p>
            <div className="text-white flex gap-4 text-lg"><FaHtml5/><FaCss3/><FaJs/></div>
            <Link className="text-white underline hover:underline-offset-4" href="https://github.com/ignacio086/Laura-fotografia">Conocer Mas</Link>
          </div>
        </div>
        <div className="rounded-xl bg-slate-100 border-2 bg-contain  bg-no-repeat bg-top" style={{backgroundImage:"url('tragos.png')"}}>
          <div className="gap-2 p-4 text-white text-center flex flex-col justify-end items-center rounded-xl w-full h-full" style={{background:'linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.8408613445378151) 12%, rgba(248,250,252,0) 100%)'}}>
            <h1 className="text-3xl ">TRAGOS</h1>
            <p className="">Muestra tarjetas de tragos consumidos a traves de una API</p>
            <div className=" flex gap-4 text-lg"><FaReact/><SiRedux/></div>
            <Link className="underline hover:underline-offset-4" href="https://github.com/ignacio086/Prueba-tecnica-ADEN">Conocer Mas</Link>
          </div>
        </div>
        <div className="rounded-xl bg-slate-100 border-2 row-span-2 bg-contain  bg-no-repeat bg-top" style={{backgroundImage:"url('tribu.png')"}}>
          <div className="gap-2 p-8  text-white text-center flex flex-col justify-end items-center rounded-xl w-full h-full" style={{background:'linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.8408613445378151) 12%, rgba(248,250,252,0) 100%)'}}>
            <h1 className="text-3xl ">TRIBU</h1>
            <p >Marketplace de productos sustentables de Mendoza.</p>
            <div className=" flex gap-4 text-lg"><FaWordpress/></div>
            <Link className="underline hover:underline-offset-4" href="https://tribusustentable.com/">Conocer Mas</Link>
          </div>
        </div>
        <div className="rounded-xl bg-slate-100 border-2 bg-contain  bg-no-repeat bg-top" style={{backgroundImage:"url('tasks.png')"}}>
          <div className="gap-2 p-4 text-white text-center flex flex-col justify-end items-center rounded-xl w-full h-full" style={{background:'linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.8408613445378151) 22%, rgba(248,250,252,0) 100%)'}}>
            <h1 className="text-3xl ">TO DO</h1>
            <p >Una app realizada para crear,editar y borrar tareas</p>
            <div className=" flex gap-4 text-lg"><TbBrandNextjs/><TbBrandMongodb/></div>
            <Link className="underline hover:underline-offset-4" href="https://github.com/ignacio086/Task-app">Conocer Mas</Link>
          </div>
        </div>
        </motion.div>
      </div>
    )
}