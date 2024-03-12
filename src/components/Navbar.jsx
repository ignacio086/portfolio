"use client";
import { motion } from "framer-motion";
import { Toggle } from "keep-react";
import Link from "next/link";
import {
  TbHome,
  TbFriends,
  TbPhone,
  TbFolder,
  TbBackhoe,
} from "react-icons/tb";
import ToggleSwitch from "./Toggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center w-full rounded-xl z-20 fixed top-0 "
    >
      <ul className="flex justify-evenly items-center text-xl bg-white text-sky-500 w-3/4 lg:w-1/3 rounded-xl border-2 border-sky-700 p-2 ">
        <Link
          href="#inicio"
          className="hover:scale-125 hover:bg-sky-500 rounded-full hover:text-white p-4 transition"
        >
          <TbHome />
        </Link>
        <span>|</span>
        <Link
          href="#experiencia"
          className="hover:scale-125  hover:bg-sky-500 rounded-full hover:text-white p-4 transition"
        >
          <TbBackhoe />
        </Link>
        <span>|</span>
        <Link
          href="#soft"
          className="hover:scale-125 hover:bg-sky-500 rounded-full hover:text-white p-4 transition"
        >
          <TbFriends />
        </Link>
        <span>|</span>
        <Link
          href="#proyectos"
          className="hover:scale-125 hover:bg-sky-500 rounded-full hover:text-white p-4 transition"
        >
          <TbFolder />
        </Link>
        <span>|</span>
        <Link
          href="#contacto"
          className="hover:scale-125 hover:bg-sky-500 rounded-full hover:text-white p-4 transition"
        >
          <TbPhone />
        </Link>
        <span>|</span>
        <ToggleSwitch/>
      </ul>
    </motion.nav>
  );
}
