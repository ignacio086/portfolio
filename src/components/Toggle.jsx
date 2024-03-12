"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import { useRouter } from "next/navigation";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });
export default function ToggleSwitch(){
  let lang = localStorage.getItem('lang') || 'es'
  const [isOn, setIsOn] = useState(lang);
  const router = useRouter()
  const toggleSwitch = () => {
    if(isOn=='es'){
      setIsOn('en')
      localStorage.setItem('lang','en')
      router.push('/en')
    }
    else{
      setIsOn('es')
      localStorage.setItem('lang','es')
      router.push('/es')
    }
  };

  return (
    <div className={`w-16  rounded-xl p-2 cursor-pointer items-center flex ${isOn==='es'?'justify-start bg-red-400':'justify-end bg-sky-500'}`}  onClick={toggleSwitch}>
      <motion.div className={`text-xs text-black text-center ${isOn==='es'?'w-6 h-6 rounded-full bg-amber-300':'w-6 h-6 rounded-full bg-red-500'}`} layout style={lato.style} >{isOn==='es'?'ES':'EN'}</motion.div>
    </div>
  );
}
