"use client"

import { easeInOut, motion } from "motion/react"

export default function Section2() {
  return (
    <section id="about" className="min-h-[70vh]">
      {/* text about */}
      <div className="mb-12 flex flex-col gap-2">
        <motion.p 
          className="text-center text-xl font-semibold"
          initial = {{
            opacity: 0
          }}
          whileInView={{
            opacity: [0, 100],
            filter: ["blur(5px)", "blur(0px)"],
            y: [30, -10, 0],
            transition: {
              duration: 0.9,
              delay: 0.1,
              ease: easeInOut
            }
          }}
        >
          About me
        </motion.p>
        <motion.div 
          className="flex items-center justify-center gap-3"
          initial = {{
            opacity: 0
          }}
          whileInView={{
            opacity: [0, 100],
            filter: ["blur(5px)", "blur(0px)"],
            y: [30, -10, 0],
            transition: {
              duration: 0.9,
              delay: 0.3,
              ease: easeInOut
            }
          }}
        >
          <div className="h-1 w-15 border-b-2 border-black" />
          <div className="h-3 w-3 rotate-45 bg-black" />
          <div className="h-1 w-15 border-b-2 border-black" />
        </motion.div>
      </div>

      {/* biografi singkat */}
      <motion.div
        className="flex justify-center"
        initial = {{
          opacity: 0
        }}
        whileInView={{
          opacity: [0, 100],
          filter: ["blur(5px)", "blur(0px)"],
          y: [30, -10, 0],
          transition: {
            duration: 0.9,
            delay: 0.6,
            ease: easeInOut
          }
        }}
      >
        <div className="flex w-1/2 flex-col items-center justify-center text-center">
          <p className="text-xl font-semibold text-[#00b4d8]">I'm a Developer</p>
          <p className="mb-3 text-2xl font-bold capitalize">i can build amazing web applications.</p>
          <p className="italic">
            Hello semuanya, Aku alfi, seorang developer yang berdedikasi untuk menciptakan solusi digital yang inovatif.
            memiliki pengalaman pada bidang web development membuat saya memiliki skill untuk mengembangkan aplikasi web
            yang responsif dan user-friendly. dan siap berkolaborasi dengan siapa saja
          </p>
        </div>
      </motion.div>
    </section>
  )
}
