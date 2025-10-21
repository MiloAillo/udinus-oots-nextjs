"use client"

import { easeInOut, easeOut, motion } from "motion/react"
import Image from "next/image"

export default function Section1() {
  return (
    // <section className="mb-52 flex min-h-[70vh] items-center justify-center">
    //   <div className="flex justify-center items-center gap-7">
    //     <Image src="/images/pfp.jpg" alt="" width="200" height="200" className="rounded-3xl" />
    //     <div id="home" className="flex flex-col">
    //       {/* Teks sambutan */}
    //       <motion.div
    //         className="mb-2 text-xl"
    //         // animate = {{
    //         //   opacity: [0, 100],
    //         //   filter: ["blur(5px)", "blur(0px)"],
    //         //   x: [150, -10, 0],
    //         //   transition: {
    //         //     duration: 0.9,
    //         //     ease: easeInOut
    //         //   }
    //         // }}
    //         initial = {{
    //           opacity: 0
    //         }}
    //         whileInView={{
    //           opacity: [0, 100],
    //           filter: ["blur(5px)", "blur(0px)"],
    //           x: [150, -20, 0],
    //           transition: {
    //             duration: 0.9,
    //             delay: 0.1,
    //             ease: easeOut
    //           }
    //         }}
    //       >
    //         <p>Hii, Welcome to my</p>
    //       </motion.div>
    //       {/* Teks utama: PORTOFOLIO */}
    //       <motion.div
    //         className="flex"
    //         whileInView={{
    //           opacity: [0, 100],
    //           filter: ["blur(5px)", "blur(0px)"],
    //           x: [150, -20, 0],
    //           transition: {
    //             duration: 0.9,
    //             delay: 0.2,
    //             ease: easeOut
    //           }
    //         }}
    //         initial = {{
    //           opacity: 0
    //         }}
    //         // animate = {{
    //         //   opacity: [0, 100],
    //         //   filter: ["blur(5px)", "blur(0px)"],
    //         //   x: [150, -20, 0],
    //         //   transition: {
    //         //     duration: 0.9,
    //         //     delay: 0.1,
    //         //     ease: easeInOut
    //         //   }
    //         // }}
    //       >
    //         {/* Kata pertama */}
    //         <p className="cursor-default text-8xl font-bold">PORTO</p>
    //         {/* Kata kedua dengan efek outline */}
    //         <p
    //           className="cursor-none text-8xl font-bold text-transparent transition-all duration-500 hover:text-black"
    //           style={{
    //             WebkitTextStroke: '2px black',
    //           }}
    //         >
    //           FOLIO
    //         </p>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
    <section className="flex min-h-[90vh] mb-20 items-center justify-center">
      <div className="relative flex flex-row gap-[50px] items-center mx-[25px]">
        {/* Card / content1 */}
        <motion.div 
          className="hidden md:flex w-[350px] h-[480px] bg-[#40444C] p-5 box-border rounded-[15px] flex-col items-center gap-[17px] text-[#F7F7F7]"
            initial = {{
              opacity: 0
            }}
            whileInView={{
              opacity: [0, 100],
              filter: ["blur(5px)", "blur(0px)"],
              x: [-150, 20, 0],
              transition: {
                duration: 0.9,
                delay: 0.1,
                ease: easeOut
              }
            }}
        >
          <div
            className="w-full h-[310px] bg-[#F7F7F7] rounded-[10px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(/images/pfp.jpg)" }}
          >
          </div>
          <div className="flex flex-col items-center w-full font-[Alata]">
            <p className="text-[14px] font-[Inter] font-medium">0912873465</p>
            <p className="font-[Inter] font-semibold text-[32px]">Mischiko Moe</p>
          </div>
          <div
            className="w-[262px] h-[30px]"
            style={{ backgroundImage: "url(/images/barcode.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
          ></div>
        </motion.div>

        {/* Header / content2 */}
        <motion.div 
          className="max-w-[480px] font-[bahnschrift] flex flex-col gap-[50px]"
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
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-1 name">
              <p className="text-[clamp(18px,3vw,24px)] font-[Inter] font-medium  text-neutral-600">Hello, my name is</p>
              <p className="text-[clamp(32px,6vw,64px)] font-[Inter] font-bold text-black">Mischiko Moe</p>
            </div>
            <p className="text-[clamp(24px,3vw,32px)] font-[Inter] text-neutral-800">
              A software engineer aiming to be a fullstack developer.
            </p>
          </div>

          <div className="font-[Inter] flex flex-col gap-[7.5px]">
            <p className="text-[clamp(18px,3vw,24px)] text-neutral-600">You can contact me at</p>
            <div className="flex flex-col gap-[5px]">
              {/* Instagram */}
              <div className="flex flex-row items-center gap-[10px]">
                <div
                  className="opacity-75 w-[clamp(26px,3vw,35px)] h-[clamp(26px,3vw,35px)] bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: "url(/images/instagram.png)" }}
                ></div>
                <p className="text-[clamp(16px,3vw,20px)] font-light text-[rgba(44,44,44,0.85)]">
                  <a href="https://www.instagram.com/miloukato">Instagram</a>
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-row items-center gap-[10px]">
                <div
                  className="opacity-75 w-[clamp(26px,3vw,35px)] h-[clamp(26px,3vw,35px)] bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: "url(/images/email.png)" }}
                ></div>
                <p className="text-[clamp(16px,3vw,20px)] font-light text-[rgba(44,44,44,0.85)]">
                  <a href="mailto:fariskahlilhaidar@gmail.com">fariskahlilhaidar@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
