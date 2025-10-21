"use client"

import { Footer, Section1, Section2, Section3, SocialIcon, Section4 } from '@/components/ui'
import Image from 'next/image'
import { easeInOut, motion } from 'motion/react'

export default function Home() {
  return (
    <motion.main className="relative"
      layout
    >
      {/* Dekorasi atas kiri */}
      <motion.div
        className="absolute"
        animate = {{
          opacity: [30, 100, 5],
          y: [25, -30, 25],
          transition: {
            duration: 3,
            times: [0, 0.5, 1],
            repeat: Infinity,
            ease: easeInOut
          }
        }}
      >
      </motion.div>

      {/* Bagian konten pertama */}
      <Section1 />

      {/* Dekorasi kanan tengah (ungu/pink) */}
      <motion.div
        className="absolute right-0 bottom-1/2"      
        animate = {{
          opacity: [60, 5, 100],
          y: [25, -30, 25],
          transition: {
            duration: 3,
            times: [0, 0.5, 1],
            repeat: Infinity,
            ease: easeInOut
          }
        }}
      >
        <Image
          src="/images/decor-pg.svg"
          alt="Description"
          width={400}
          height={400}
          className='rotate-90'
        />
      </motion.div>


      {/* Dekorasi kiri tengah (kuning) */}
      <Image
        src="/images/decor-yw.svg"
        alt="Description"
        width={400}
        height={400}
        className="absolute bottom-1/2 left-0 translate-y-full"
      />

      {/* Bagian konten kedua */}

      {/* Dekorasi kanan bawah (biru/purple) */}

      {/* Bagian konten ketiga */}

      <Section4 />

      {/* Footer halaman */}
      <Footer />
    </motion.main>
  )
}
