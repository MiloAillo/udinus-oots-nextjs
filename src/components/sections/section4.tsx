import { useState } from "react"
import { Button } from "../ui/button"
import Image from "next/image"

export default function Section4() {
    const [category, setCategory] = useState<"lang" | "framework" | "tools" | "db">("lang")

    return (
        <section>
            <div className="flex gap-5 w-full h-fit justify-center items-center">
                <Button className="bg-neutral-200 text-neutral-800 hover:text-neutral-200">Languages</Button>
                <Button className="bg-neutral-200 text-neutral-800 hover:text-neutral-200">Libraries & Frameworsk</Button>
                <Button className="bg-neutral-200 text-neutral-800 hover:text-neutral-200">Tools</Button>
                <Button className="bg-neutral-200 text-neutral-800 hover:text-neutral-200">Databases</Button>
            </div>
            <div>
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
        </section>
    )
}