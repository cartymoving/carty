'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Overlay from './Overlay';

interface params{
  color: string;
  border: string;
  hover: string;
}

const LargeQuoteBtn:React.FC<params> = ({ color, border, hover }) => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   if (isOpen) {
  //     body?.classList.add("active");
  //   } else {
  //     body?.classList.remove("active");
  //   }
  //   return () => {
  //     body?.classList.remove("active");
  //   }
  // }, [isOpen]);

  // const toggleOverlay = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <div className='w-full h-auto flex justify-center mt-12'>
        <Link  className={`text-mywhite text-xs md:text-base font-bold font-Montserrat w-full lg:w-fit text-center ${color} rounded-[4px] border-2 ${border} py-[10px] lg:px-[124px] md:hover:bg-white ${hover} transition-all uppercase`} href="#">Get a Quote</Link>
      </div>
      {/* <Overlay isOpen={isOpen} onClose={toggleOverlay} /> */}
    </>
  )
}

export default LargeQuoteBtn
