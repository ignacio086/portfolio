'use client'
import { useEffect, useState } from "react"
import Tarjetas from "./Tarjetas"

export default  function Pokeapi(){
    
    const [nombre,setNombre] = useState('pikachu')
    const [verdadero,setVerdadero] = useState('pikachu')
    useEffect(()=>{
        if(nombre==''){
            setVerdadero('pikachu')
        }
        else{
            setVerdadero(nombre)
        }
    },[nombre])
    return(
        <div id='api' className="snap-center bg-gradient-to-br from-gray-900 from-50% via-gray-900 from-50% to-slate-100/0 to-50% h-screen w-screen bg-white flex flex-col pt-12 justify-center items-center">
            <h2 className="text-white">Ingrese un pokemon</h2>
            <input className="w-1/2 h-12 border-2 p-2 rounded border-slate-300" value={nombre} onChange={(e)=>{setNombre(e.target.value)}} placeholder="ingrese un pokemon"></input>
            <Tarjetas nombre={verdadero}/>
        </div>
    )
}