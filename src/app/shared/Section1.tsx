import React from 'react'
import Image from 'next/image'
import QuoteBtn from './QuoteBtn'
import MobileQuoteBtn from './MobileQuoteBtn'

export default async function Section1(){
  return(
    <section className="h-fit w-screen relative">
      <Image
        className='absolute bottom-1/2 translate-y-2/3 md:translate-y-0 h-[360px] md:bottom-0 right-0 md:h-[55%] xl:h-[60%] 2xl:h-[70%] w-[550px] min-w-[550px] -z-10 lg:z-10 md:w-fit' 
        src="/sec1_1.png"
        width={1158}
        height={759}
        priority
        unoptimized={true}
        alt="Picture of a worker"
      />  
      <div className="custom-shape absolute top-0 left-0 -z-20"></div>
      <div className='min-h-screen h-fit md:w-full justify-between px-4 md:px-[10vw] relative flex flex-col pt-[100px] md:pt-[calc(8.8vh+96px)] max-w-[1920px] mx-auto'>
        <h1 className='text-mywhite h1 w-fit font-Montserrat font-bold leading-tight text-nowrap'>Carty Cares:<br /> Your Premier<br /> Moving Solution</h1>
        <div className='md:mb-16 mt-32 2xl:mt-0'>
          <p className='text-sm md:text-lg 2xl:text-2xl w-full md:max-w-[40%] mb-8 md:mb-11 text-myblack font-Hind font-medium'>We understand that moving is more than just transporting belongings; it’s about starting a new chapter in your life. We’re here to make that transition as smooth as possible, with a commitment to exceptional service and care.</p>
          <div className='w-[154px] md:w-[250px]'>
            <QuoteBtn />
            <MobileQuoteBtn />
          </div>
        </div>
      </div>
    </section>
  )
}