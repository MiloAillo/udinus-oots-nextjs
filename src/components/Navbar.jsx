"use client"

import { easeIn, easeInOut, easeOut, motion } from 'motion/react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Navbar() {
  return (
    // <nav className="font-poppins sticky flex justify-between px-5 py-7">
    <nav className="font-poppins sticky top-0 z-50 flex justify-between bg-white/10 px-5 py-3 backdrop-blur">
      <div className="w-1/6 flex flex-row">
        <p className="cursor-default text-2xl font-bold"> {">"} mischiko</p>
        <motion.div
          className="cursor-default text-2xl font.ex"
          animate={{
            opacity: [0, 100, 0],
            transition: {
              duration: 1,
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 0.4
            }
          }}
        >_</motion.div>
      </div>

      <div className="flex w-1/6 justify-end gap-2">
        <a href="https://github.com/MiloAillo">
          <div className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:scale-120 hover:bg-gray-400/50">
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </div>
        </a>
      </div>
    </nav>
  )
}
