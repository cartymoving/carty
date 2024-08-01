'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function HeroForm () {
    const [collection, setCollection] = useState("");
    const [moving, setMoving] = useState("");
    const router = useRouter()

    return (
        <form onSubmit={(e) => {e.preventDefault(); router.push(`/contacts?collection=${collection}&moving=${moving}`)}} className="rounded-xl bg-mywhite md:bg-transparent lg:rounded-[3rem] py-8 lg:py-12 px-6 lg:px-8 flex flex-col w-full lg:w-[33rem] max-w-[25rem] lg:max-w-none mx-auto relative z-50 lg:mx-0">
            <h2 className="mb-6 font-Hind font-medium md:text-xl xl:text-2xl">Easily estimate your move for free. </h2>
            <input type="text" className="font-medium bg-mywhite font-Hind rounded-xl border border-black py-2 lg:py-4 pl-4 lg:pl-8 placeholder:font-light placeholder:text-opacity-50 mb-2 lg:mb-4 lg:h-[3.25rem]" placeholder="Collection Address" value={collection} onChange={(e) => {setCollection(e.currentTarget.value)}}/>
            <input type="text" className="font-medium bg-mywhite font-Hind rounded-xl border border-black py-2 lg:py-4 pl-4 lg:pl-8 placeholder:font-light placeholder:text-opacity-50 mb-6 lg:mb-8 lg:h-[3.25rem]" placeholder="Moving to Address" value={moving} onChange={(e) => {setMoving(e.currentTarget.value)}}/>
            <button className="bg-myblack text-white flex justify-center items-center rounded-xl h-10 lg:h-[3.25rem] text-[14px] lg:text-[16px] font-bold gap-1 lg:gap-2 group hover:bg-[#363636] transition duration-300">
                NEXT
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.500063 6L12.0861 6L7.58606 1.5L9.00006 0.0859982L15.9141 7L9.00006 13.914L7.58606 12.5L12.0861 8L0.500063 8L0.500063 6Z" fill="#F4F1FF"/>
                </svg>
            </button>
        </form>
    )
}
