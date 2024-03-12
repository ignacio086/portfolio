'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default  function Home({params}) {
 const router = useRouter()
 useEffect(()=>{router.push('/es')},[0])
  return (
    <main className=" w-screen h-screen bg-sky-500">

    </main>
  );
}