import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Section5 from '../shared/Section5'


const page = () => {
  return (
    <>
      <section className='min-h-screen h-fit w-screen relative -mb-20 md:mb-0'>
        1
      </section>
        <section className='section3 w-screen h-fit min-h-screen skew-y-[-14deg] md:skew-y-[-7deg] translate-y-20 md:translate-y-40 mb-56 md:mb-96'>
        <div className='bg-mygreen w-[40vw] md:w-[14vw] h-4 md:h-8 absolute -top-4 md:-top-8 left-0'></div>
        <div className='bg-mygreen w-[40vw] md:w-[14vw] h-4 md:h-8 absolute -bottom-4 md:-bottom-8 right-0'></div>
        <div className='w-screen max-w-[1920px] mx-auto relative h-fit skew-y-[14deg] md:skew-y-[7deg] translate-y-28 md:translate-y-40 px-4 md:px-[10vw] max-padding'>
          <div className='flex gap-[9.3vw] max-gap relative md:px-[6vw] flex-row-reverse second-max-padding'>
            <div className='flex flex-col justify-center w-full lg:w-[calc(81%-3.75vw)]'>
              <p className='text-mygreen font-bold font-Hind text-2xl mt-10'>About Us</p>
              <h1 className='text-mywhite font-bold font-Montserrat text-[2rem] md:text-5xl 3xl:text-[4rem] mt-4 mb-6 md:mb-12'>Our Story</h1>
              <p className='text-mywhite font-Hind font-medium text-sm md:text-lg mb-8 md:mb-16'>Carty Moving Company has grown from a small local business to a trusted name in the moving industry. Our mission is simple: to provide our clients with reliable, efficient, and personalized moving services. With years of experience and a dedicated team of professionals, we take pride in handling your possessions with the utmost care and respect.<br /><br />
                Our team consists of experienced movers who are trained to handle all types of moves, whether it’s a small apartment, a large family home, or a corporate office. We are passionate about what we do, and it shows in the quality of our work and the satisfaction of our customers.</p>
            </div>
            <div className='w-[calc(50%-3.75vw)] relative lg:block hidden'>
              <Image src="/sec_aboutus2.png" width="434" height="529" alt='Worker help' unoptimized={true} className='w-full h-full object-[40%] lg:block hidden object-cover container rounded-lg'/>
            </div>
          </div>
        </div>
      </section>
      <Section5 />
    </>
  )
}

export default page