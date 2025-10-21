import { useState } from "react"
import { Button } from "../ui/button"
import Image from "next/image"

export default function Section4() {
    const [category, setCategory] = useState<"lang" | "framework" | "tools" | "db">("lang")

    return (
        <section className="flex flex-col gap-10 mb-10">
            <div className={`gap-5 w-full h-fit justify-center items-center flex`}>
                <Button className="bg-neutral-200 text-neutral-800 hover:text-neutral-200" onClick={() => setCategory("lang")}>Languages</Button>
                <Button className="bg-neutral-200 text-neutral-800 hover:text-neutral-200" onClick={() => setCategory("framework")}>Libraries & Frameworsk</Button>
            </div>
            <div className={`gap-5 flex-wrap justify-center ${category === "lang" ? "flex" : "hidden"}`}>
                <div className="flex flex-row gap-5 justify-center items-center w-100">
                    <div className="bg-neutral-100 p-3 w-fit h-fit rounded-xl">
                        <div style={{background: "url(/images/javascript.png)", backgroundSize: "contain"}} className="w-20 h-20" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">Javascript</h1>
                        <p>The language i used since the beginning of my journey</p>
                    </div>
                </div>
                <div className="flex flex-row gap-5 justify-center items-center w-100">
                    <div className="bg-neutral-100 p-3 w-fit h-fit rounded-xl">
                        <div style={{background: "url(/images/typescript.png)", backgroundSize: "contain"}} className="w-20 h-20" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">Typescript</h1>
                        <p>Supercharged Javascript i use to avoid production bugs nightmare</p>
                    </div>
                </div>
                <div className="flex flex-row gap-5 justify-center items-center w-100">
                    <div className="bg-neutral-100 p-3 w-fit h-fit rounded-xl">
                        <div style={{background: "url(/images/php.png)", backgroundSize: "contain"}} className="w-20 h-20" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">PHP</h1>
                        <p>A language i had to learn to use Laravel</p>
                    </div>
                </div>
            </div>

            <div className={`gap-5 flex-wrap justify-center ${category === "framework" ? "flex" : "hidden"}`}>
                <div className="flex flex-row gap-5 justify-center items-center w-100">
                    <div className="bg-neutral-100 p-3 w-fit h-fit rounded-xl flex justify-center items-center">
                        <div style={{background: "url(/images/react.png)", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="w-20 h-20" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">React</h1>
                        <p>My number one frontend library</p>
                    </div>
                </div>
                <div className="flex flex-row gap-5 justify-center items-center w-100">
                    <div className="bg-neutral-100 p-3 w-fit h-fit rounded-xl flex justify-center items-center">
                        <div style={{background: "url(/images/nestjs.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="w-20 h-20" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">NestJS</h1>
                        <p>A robust and scalable backend framework i have used</p>
                    </div>
                </div>
                <div className="flex flex-row gap-5 justify-center items-center w-100">
                    <div className="bg-neutral-100 p-3 w-fit h-fit rounded-xl flex justify-center items-center">
                        <div style={{background: "url(/images/express.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="w-20 h-20" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">ExpressJS</h1>
                        <p>A lightweight and fast backend framework i sometimes use</p>
                    </div>
                </div>
                <div className="flex flex-row gap-5 justify-center items-center w-100">
                    <div className="bg-neutral-100 p-3 w-fit h-fit rounded-xl flex justify-center items-center">
                        <div style={{background: "url(/images/Laravel.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="w-20 h-20" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">Laravel</h1>
                        <p>GOATED all in one backend</p>
                    </div>
                </div>
                <div className="flex flex-row gap-5 justify-center items-center w-100">
                    <div className="bg-neutral-100 p-3 w-fit h-fit rounded-xl flex justify-center items-center">
                        <div style={{background: "url(/images/Tailwind.png)", backgroundPosition: "center" ,backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="w-20 h-20" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">Tailwind</h1>
                        <p>No separate CSS files anymore yay</p>
                    </div>
                </div>
            </div>

        </section>
    )
}