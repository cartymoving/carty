import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Section5 from '../shared/Section5'
import QuoteBtn from '../shared/QuoteBtn'
import Faq from '../shared/Faq'
import MobileQuoteBtn from '../shared/MobileQuoteBtn'


const page = () => {
  return (
    <>
        <section className="h-fit w-screen relative">
          <Image
            className='absolute bottom-[60%] translate-y-2/3 md:translate-y-0 md:bottom-0 right-4 md:right-[10vw] -z-10 lg:z-10 w-[333px] h-[398px] md:w-auto md:h-[88%]' 
            src="/sec_aboutUs.png"
            width={801}
            height={953}
            priority
            unoptimized={true}
            alt="Picture of a worker"
          />  
          <div className="custom-shape-3 absolute top-0 left-0 -z-20"></div>
          <div className='min-h-screen h-fit md:w-full justify-between px-4 md:px-[10vw] relative flex flex-col pt-[100px] md:pt-[calc(8.8vh+96px)] max-w-[1920px] mx-auto'>
            <h1 className='text-mywhite lg:w-1/2 h1 font-Montserrat font-bold leading-tight'>Get to Know Carty Moving Company</h1>
            <div className='md:mb-16 2xl:mt-0'>
              <p className='text-sm md:text-lg 2xl:text-2xl w-full md:max-w-[40%] mb-8 md:mb-11 text-myblack font-Hind font-medium'>We don’t just move boxes; we move lives. Our mission is to provide moving services that cater to your needs, ensuring a smooth transition to your new location. Trust us to handle your move with professionalism.</p>
              <div className='w-[154px] md:w-[250px]'>
                <QuoteBtn />
                <MobileQuoteBtn />
              </div>
            </div>
          </div>
        </section>
        <section className='section3 md:mt-24 w-screen h-fit min-h-screen skew-y-[14deg] md:skew-y-[7deg] translate-y-20 md:translate-y-40 mb-56 md:mb-96'>
        <div className='bg-mygreen w-[40vw] md:w-[14vw] h-4 md:h-8 absolute -top-4 md:-top-8 right-0'></div>
        <div className='bg-mygreen w-[40vw] md:w-[14vw] h-4 md:h-8 absolute -bottom-4 md:-bottom-8 left-0'></div>
        <div className='w-screen max-w-[1920px] mx-auto relative h-fit skew-y-[-14deg] md:skew-y-[-7deg] translate-y-28 md:translate-y-40 px-4 md:px-[10vw] max-padding'>
          <div className='flex gap-[9.3vw] max-gap relative md:px-[6vw] flex-row-reverse second-max-padding'>
            <div className='flex flex-col justify-center w-full lg:w-[calc(81%-3.75vw)]'>
              <p className='text-mygreen font-bold font-Hind text-2xl md:mt-10'>About Us</p>
              <h1 className='text-mywhite font-bold font-Montserrat text-[2rem] md:text-5xl 3xl:text-[4rem] mt-4 mb-6 md:mb-12'>Our Story</h1>
              <p className='text-mywhite font-Hind font-medium text-sm md:text-lg mb-8 md:mb-16'>Carty Moving Company has grown from a small local business to a trusted name in the moving industry. Our mission is simple: to provide our clients with reliable, efficient, and personalized moving services. With years of experience and a dedicated team of professionals, we take pride in handling your possessions with the utmost care and respect.<br /><br />
                Our team consists of experienced movers who are trained to handle all types of moves, whether it’s a small apartment, a large family home, or a corporate office. We are passionate about what we do, and it shows in the quality of our work and the satisfaction of our customers.</p>
            </div>
            <div className='w-[calc(50%-3.75vw)] relative lg:block hidden'>
              <Image src="/sec_aboutus2.png" width="434" height="529" alt='Worker help' unoptimized={true} className='w-full h-full object-[40%] lg:block hidden object-cover container rounded-lg'/>
            </div>
          </div>
          <div className='w-full h-fit text-mywhite mt-20 md:pb-32 md:mt-32'>
            <p className='font-Hind text-mygreen font-bold text-xs md:text-2xl'>FAQ</p>
            <h2 className='font-Montserrat font-bold text-[2rem] md:text-[3rem] xl:text-[4rem] mb-9 md:mb-12'>Got Questions?<br/> We’ve Got Answers!</h2>
            <Faq />
          </div>
        </div>
        
      </section>
      <Section5 />
    </>
  )
}

export default page