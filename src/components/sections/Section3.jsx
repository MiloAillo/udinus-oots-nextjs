"use client"

import { delay, easeInOut, motion } from "motion/react"
import { SocialIcon } from '../ui'

export default function Section3() {
  return (
    <section id="stacks" className="mb-32 min-h-[100vh] flex w-full justify-center items-center">
      {/* Card utama dengan efek glassmorphism (transparan, blur, dan bayangan halus) */}
      <motion.div 
        className="flex flex-col gap-5 rounded-xl border border-white/20 bg-white/20 p-10 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:shadow-xl"
        initial = {{
          opacity: 0
        }}
        whileInView={{
          opacity: [0, 100],
          filter: ["blur(5px)", "blur(0px)"],
          y: [50, -10, 0],
          transition: {
            duration: 0.9,
            ease: easeInOut
          }
        }}
      >
        <p className="text-center text-2xl font-bold text-black drop-shadow">Stack</p>

        {/* Deskripsi singkat tentang isi bagian Stack */}
        <p className="max-w-md text-center text-sm text-black/90">
          Teknologi yang saya gunakan untuk membangun proyek ini mulai dari framework frontend hingga tools pengembang.
          Kamu bisa coba pelajari masing-masing untuk memahami workflow modern dalam web development.
        </p>

        {/* Daftar Frameworks dan Libraries */}
        <div className="flex flex-col gap-2">
          <p className="text-center text-sm font-semibold text-black/90">Frameworks & Libraries</p>
          {/* Baris ikon-ikon framework yang digunakan */}
          <div className="flex justify-center gap-3">
            {/* Komponen SocialIcon menampilkan logo + tooltip saat di-hover */}
            <SocialIcon src="/images/react.svg" alt="React" tooltip="React" />
            <SocialIcon src="/images/nextjs.svg" alt="Next.js" tooltip="Next.js" />
            <SocialIcon src="/images/tailwindcss.svg" alt="Tailwind CSS" tooltip="Tailwind CSS" />
          </div>
        </div>

        {/* Daftar Tools yang digunakan */}
        <div className="flex flex-col gap-2">
          <p className="text-center text-sm font-semibold text-black/90">Tools</p>
          {/* Baris ikon-ikon tools */}
          <div className="flex justify-center gap-3">
            <SocialIcon src="/images/vscode.svg" alt="VSCode" tooltip="VSCode" />
            <SocialIcon src="/images/github.svg" alt="GitHub" tooltip="GitHub" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
