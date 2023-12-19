'use client'

import { useEffect, useState } from "react"

export default function Tarjetas({nombre}){
    const [datos,setDatos]= useState({
        name:'pikachu',
        sprites:{
            front_default:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        },
        weight:60,
        types:[{slot:1,type:{name:'electric'}}]
    })
    const getData= async ()=>{
        const res =await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const data = await res.json()
        setDatos(data)
    }
    useEffect(()=>{
        getData()
    },[nombre])
    return(
        <div className=" w-1/2 md:h-3/4 h-1/2 border-2 border-gray-900 rounded flex flex-col justify-center items-center text-center">
            <img src={datos.sprites.front_default} alt='imagen-pokemon'></img>
            <h1 className="uppercase">{datos.name}</h1>
            <p className="tex-sm">Peso:{datos.weight} kg</p>
            <p className="tex-sm">Tipo:{datos.types[0].type.name} </p>
        </div>
    )
}