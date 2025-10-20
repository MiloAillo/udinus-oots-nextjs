"use client"

import { easeInOut, easeOut, motion } from "motion/react"

export default function Section1() {
  return (
    <section className="mb-52 flex min-h-[70vh] items-center justify-center">
      <div id="home" className="flex flex-col">
        {/* Teks sambutan */}
        <motion.div
          className="mb-2 text-xl"
          // animate = {{
          //   opacity: [0, 100],
          //   filter: ["blur(5px)", "blur(0px)"],
          //   x: [150, -10, 0],
          //   transition: {
          //     duration: 0.9,
          //     ease: easeInOut
          //   }
          // }}
          initial = {{
            opacity: 0
          }}
          whileInView={{
            opacity: [0, 100],
            filter: ["blur(5px)", "blur(0px)"],
            x: [150, -20, 0],
            transition: {
              duration: 0.9,
              delay: 0.1,
              ease: easeOut
            }
          }}
        >
          <p>Hii, Welcome to my</p>
        </motion.div>

        {/* Teks utama: PORTOFOLIO */}
        <motion.div
          className="flex"
          whileInView={{
            opacity: [0, 100],
            filter: ["blur(5px)", "blur(0px)"],
            x: [150, -20, 0],
            transition: {
              duration: 0.9,
              delay: 0.2,
              ease: easeOut
            }
          }}
          initial = {{
            opacity: 0
          }}
          // animate = {{
          //   opacity: [0, 100],
          //   filter: ["blur(5px)", "blur(0px)"],
          //   x: [150, -20, 0],
          //   transition: {
          //     duration: 0.9,
          //     delay: 0.1,
          //     ease: easeInOut
          //   }
          // }}  
        >
          {/* Kata pertama */}
          <p className="cursor-default text-8xl font-bold">PORTO</p>

          {/* Kata kedua dengan efek outline */}
          <p
            className="cursor-none text-8xl font-bold text-transparent transition-all duration-500 hover:text-black"
            style={{
              WebkitTextStroke: '2px black',
            }}
          >
            FOLIO
          </p>
        </motion.div>
      </div>
    </section>
  )
}
