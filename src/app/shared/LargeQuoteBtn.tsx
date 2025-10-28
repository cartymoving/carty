'use client';

import Link from "next/link";

interface params{
  color: string;
  border: string;
  hover: string;
}

const LargeQuoteBtn:React.FC<params> = ({ color, border, hover }) => {

  return (
    <div className='w-full h-auto flex justify-center mt-12'>
      <Link 
        href="/contacts#quote"   
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/contacts";
        }}
      ><button className={`text-mywhite text-xs md:text-base font-bold font-Montserrat w-full lg:w-fit text-center ${color} rounded-[4px] border-2 ${border} py-[10px] lg:px-[124px] md:hover:bg-white ${hover} transition-all uppercase`}>Get a Quote</button></Link>
    </div>
  )
}

export default LargeQuoteBtn
