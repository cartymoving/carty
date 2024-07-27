import React from 'react'
import Image from 'next/image'

export default async function Section1(){
  return(
    <section className="min-h-screen h-fit w-screen relative">
      <Image
        className='absolute bottom-1/2 translate-y-2/3 md:translate-y-0 h-[360px] md:bottom-0 right-0 md:h-[55%] xl:h-[60%] 2xl:h-[70%] w-[550px] min-w-[550px] -z-10 md:z-10 md:w-fit' 
        src="/sec1_1.png"
        width={1158}
        height={759}
        alt="Picture of a worker"
      />  
      <div className="custom-shape absolute top-0 left-0 -z-20"></div>
      <div className='min-h-screen h-fit md:w-full px-4 md:px-[10vw] relative flex flex-col gap-[8.8vh] pt-[100px] md:pt-[20vh]'>
        <h1 className='text-mywhite h1 w-fit font-Montserrat font-bold leading-tight text-nowrap'>Carty Cares:<br /> Your Premier<br /> Moving Solution</h1>
        <p className='font-medium ph1 font-Hind text-sm msm:text-lg lg:text-xl xl:text-2xl pr-4 md:pr-0 bottom-0 absolute md:static md:w-[43%] mt-0 lg:mt-3 xl:mt-0 2xl:leading-relaxed'>Your trusted partner for all your moving needs Easily estimate your move for free. Your trusted partner for all your moving needs Easily estimate your move for free. Your trusted partner for all your moving needs Easily estimate your move for free.</p>
      </div>
    </section>
  )
}