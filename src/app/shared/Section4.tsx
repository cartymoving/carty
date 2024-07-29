import React from 'react'
import Image from 'next/image'

export default async function Section1(){
  return(
    <section className='mt-[33vh] h-fit w-screen px-4 md:px-[10vw]'>
      <div className='flex gap-[9.1vw] items-center'>
        <div className='flex flex-col gap-[2.2vh] w-[43%]'>
          <p className='font-Montserrat text-mygreen font-bold text-2xl'>Detailed Prices</p>
          <h1 className='text-[4rem] text-myblack font-bold font-Montserrat'>All-Inculsive Rates</h1>
        </div>
        <p className='text-2xl font-medium font-Hind w-[48%]'>Please note that our hourly rates may vary based on the service area, specific dates, and the immediacy of your request. We strive to offer competitive pricing while ensuring top-notch service. Always feel free to reach out for the most current rate tailored to your moving project.</p>
      </div>
      <div className='flex flex-col items-center gap-12'>
        <div className='container bg-mywhite py-7 px-12 w-[48%] rounded-xl relative'>
          <div className='w-full h-fit bg-mygreen text-mywhite text-center font-Montserrat font-bold text-sm py-[6px] absolute top-0 left-0 rounded-tr-xl rounded-tl-xl'>Most popular</div>
        </div>
        <div className='flex w-full justify-center gap-12'>
          <div className='container bg-mywhite py-7 px-12 w-[48%] rounded-xl'></div>
          <div className='container bg-mywhite py-7 px-12 w-[48%] rounded-xl'></div>
        </div>
      </div>

    </section>
  )
}