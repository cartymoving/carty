import React from 'react'
import Section4Containers from './Section4Containers'

export default async function Section4(){
  return(
    <section id='sec4' className='mt-[calc(16vh+175px)] h-fit w-screen px-4 md:px-[10vw] max-w-[1920px] mx-auto'>
      <div className='flex gap-6 md:gap-[5vw] xl:gap-[6.5vw] 2xl:gap-[9.1vw] md:items-center flex-col md:flex-row'>
        <div className='flex flex-col gap-4 md:gap-[2.2vh] md:w-[43%]'>
          <p className='font-Montserrat text-mygreen font-bold text-sm md:text-xl xl:text-2xl'>Detailed Prices</p>
          <h1 className='text-[2rem] lg:text-5xl 2xl:text-[4rem] text-myblack font-bold font-Montserrat'>All-Inculsive Rates</h1>
        </div>
        <p className='text-sm md:text-base lg:text-lg font-medium font-Hind md:w-[48%]'>Please note that our hourly rates may vary based on the service area, specific dates, and the immediacy of your request. We strive to offer competitive pricing while ensuring top-notch service. Always feel free to reach out for the most current rate tailored to your moving project.</p>
      </div>
      <Section4Containers />
    </section>
  )
}