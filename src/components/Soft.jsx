"use client";

import { Lato } from "next/font/google";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });

export default function Soft({lang}) {
  return (
    <section id="soft" className="w-screen gap-12 flex flex-col bg-slate-200 p-6 lg:p-24">
      <h1 className="text-4xl letra lg:text-8xl" style={lato.style}>
        {lang.title}
      </h1>
      <div className="w-screen gap-12 justify-center items-center flex flex-col">
        <div className="w-screen flex flex-col-reverse lg:flex-row gap-2 lg:gap-12 items-center justify-center">
          <motion.div className="w-1/2" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <div className="w-full h-full ">
            <Player
          src="https://lottie.host/763694ac-c597-4feb-adc3-88ae52246395/JvbJOj4EVZ.json"
          style={{ width: "70%", height: "70%" }}
          autoplay
          loop
        />
            </div>
          </motion.div>
          <motion.div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-12" initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <h1 className="text-2xl letra2 lg:text-5xl" style={lato.style}>{lang.firsttitle}</h1>
            <p className=" w-3/4 lg:w-1/2">
              {lang.firstcontent}
            </p>
          </motion.div>
        </div>
        <div className="w-screen flex flex-col-reverse lg:flex-row-reverse gap-2 lg:gap-12 items-center justify-center">
          <motion.div className="w-1/2 mr-24" initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <div className="w-full h-full ">
            <Player
          src="https://lottie.host/f9ee2ea4-87fb-46b1-ab85-7b646d4ec4cc/trwkhv70DL.json"
          style={{ width: "100%", height: "100%" }}
          autoplay
          loop
        />
            </div>
          </motion.div>
          <motion.div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-12" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <h1 className="text-2xl letra3 lg:text-5xl" style={lato.style}>{lang.secondtitle}</h1>
            <p className="w-3/4 lg:w-1/2">
            {lang.secondcontent}
            </p>
          </motion.div>
        </div>
        <div className="w-screen flex flex-col-reverse lg:flex-row gap-2 lg:gap-12 items-center justify-center">
          <motion.div className="w-1/2" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <div className="w-full h-full ">
            <Player
          src="https://lottie.host/dd4c0f90-13a9-4a7f-9e6a-eb61cfcfc54e/KSSoWH8usR.json"
          style={{ width: "70%", height: "70%" }}
          autoplay
          loop
        />
            </div>
          </motion.div>
          <motion.div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-12" initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <h1 className="text-2xl letra4 lg:text-5xl" style={lato.style}>{lang.thirdtitle}</h1>
            <p className="w-3/4 lg:w-1/2">
            {lang.thirdcontent}
            </p>
          </motion.div>
        </div>
        <div className="w-screen flex flex-col-reverse lg:flex-row-reverse gap-2 lg:gap-12 items-center justify-center">
          <motion.div className="w-1/2 mr-24" initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <div className="w-full h-full ">
            <Player
          src="https://lottie.host/106f69a6-23b0-48ba-82d0-39b9c2ad1023/FBtQuoOMPR.json"
          style={{ width: "70%", height: "70%" }}
          autoplay
          loop
        />
            </div>
          </motion.div>
          <motion.div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-12" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{duration:1}}viewport={{once:true}}>
            <h1 className="text-2xl letra5 lg:text-5xl" style={lato.style}>{lang.fourthtitle}</h1>
            <p className="w-3/4 lg:w-1/2">
            {lang.fourthcontent}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
