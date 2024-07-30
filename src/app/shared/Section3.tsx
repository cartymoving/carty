import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Section2(){
  return(
    <section className='section3 w-screen h-fit min-h-screen skew-y-[-14deg] md:skew-y-[-7deg] translate-y-20 md:translate-y-40'>
      <div className='bg-mygreen w-[40vw] md:w-[14vw] h-4 md:h-8 absolute -top-4 md:-top-8 left-0'></div>
      <div className='bg-mygreen w-[40vw] md:w-[14vw] h-4 md:h-8 absolute -bottom-4 md:-bottom-8 right-0'></div>
      <div className='w-screen relative h-fit skew-y-[14deg] md:skew-y-[7deg] translate-y-28 md:translate-y-40 px-4 md:px-[10vw]'>
        <div className='flex gap-[7.5vw] relative'>
          <div className='flex flex-col w-full lg:w-[calc(50%-3.75vw)]'>
            <p className='text-mygreen font-bold font-Hind text-2xl'>About Us</p>
            <h1 className='text-mywhite font-bold font-Montserrat text-[2rem] md:text-5xl 3xl:text-[4rem] mt-4 mb-6 md:mb-12'>Why Carty Movers Is Your Best Choice</h1>
            <p className='text-mywhite font-Hind font-medium text-sm md:text-2xl mb-8 md:mb-16'>At Carty Moving Company, we don’t just move boxes; we move lives. Our mission is to provide moving services that cater to your needs, ensuring a smooth transition to your new location. Trust us to handle your move with care, efficiency, and professionalism.</p>
            <Link href="#" className='quote w-fit flex gap-2 px-4 text-xs items-center md:text-base py-2 xl:py-[15px] xl:px-7 bg-mygreen mr-4 md:hover:bg-mywhite border-mygreen border-2 rounded-md font-Hind text-mywhite md:hover:text-mygreen font-bold transition-all'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6635 7.93127C21.1376 6.67626 20.3726 5.53554 19.4111 4.57268C18.4525 3.60816 17.3138 2.8413 16.0596 2.31565C14.7748 1.77454 13.3943 1.49718 12.0002 1.50002H11.9533C10.5354 1.50705 9.16427 1.7883 7.87286 2.34143C6.62944 2.87247 5.50139 3.64069 4.55177 4.60315C3.59958 5.56384 2.84335 6.70057 2.32521 7.95002C1.78736 9.24931 1.51482 10.6431 1.52364 12.0492C1.53068 13.6758 1.91974 15.2906 2.6463 16.7344V20.2969C2.6463 20.8922 3.12911 21.375 3.72208 21.375H7.27989C8.73038 22.107 10.331 22.4921 11.9557 22.5H12.0049C13.4065 22.5 14.7635 22.2281 16.0432 21.6961C17.291 21.1767 18.4255 20.4188 19.383 19.4649C20.3486 18.5063 21.108 17.386 21.6401 16.1367C22.1908 14.843 22.4721 13.4672 22.4791 12.0469C22.4838 10.6196 22.2072 9.2344 21.6635 7.93127ZM7.32208 13.125C6.70333 13.125 6.19943 12.6211 6.19943 12C6.19943 11.3789 6.70333 10.875 7.32208 10.875C7.94083 10.875 8.44474 11.3789 8.44474 12C8.44474 12.6211 7.94318 13.125 7.32208 13.125ZM12.0002 13.125C11.3815 13.125 10.8776 12.6211 10.8776 12C10.8776 11.3789 11.3815 10.875 12.0002 10.875C12.619 10.875 13.1229 11.3789 13.1229 12C13.1229 12.6211 12.619 13.125 12.0002 13.125ZM16.6783 13.125C16.0596 13.125 15.5557 12.6211 15.5557 12C15.5557 11.3789 16.0596 10.875 16.6783 10.875C17.2971 10.875 17.801 11.3789 17.801 12C17.801 12.6211 17.2971 13.125 16.6783 13.125Z"/>
              </svg>
              GET A QUOTE
            </Link>
          </div>
          <div className='w-[calc(50%-3.75vw)] relative lg:block hidden'>
            <Image src="/sec3_1.png" width="679" height="529" alt='Worker help' unoptimized={true} className='w-full h-full object-[40%] lg:block hidden object-cover container rounded-lg'/>
          </div>
        </div>
        <div className='flex flex-col mt-[8vh] md:mt-[10vh]'>
          <h1 className='text-mywhite font-bold font-Montserrat text-[2rem] md:text-4xl xl:text-5xl 3xl:text-[4rem] text-center'>Carty Movers Have Built Its Reputation</h1>
          <div className='flex flex-col md:flex-row xl:px-[8.5vw] gap-[3.3vw] text-mywhite mb-60 md:mb-80 mt-[6vh]'>
            <div>
              <Image src="/sec3_icon2.png" width="64" height="64" alt='friendly solutions' /> 
              <h3 className='font-bold font-Montserrat text-2xl mt-[2vh] mb-[1.4vh]'>Skilled Team</h3>
              <p className='font-medium font-Hind text-sm md:text-base xl:text-xl'>Our movers are experienced professionals trained to handle your belongings with care.</p>
            </div>
            <div>
              <Image src="/sec3_icon1.png" width="64" height="64" alt='multiple ways' /> 
              <h3 className='font-bold font-Montserrat text-2xl mt-[2vh] mb-[1.4vh]'>End-to-End Solutions</h3>
              <p className='font-medium font-Hind text-sm md:text-base xl:text-xl'>From packing to unpacking, we manage every aspect of your move.</p>
            </div>
            <div>
              <Image src="/sec3_icon3.png" width="64" height="64" alt='Customer-Centric Approach' />
              <h3 className='font-bold font-Montserrat text-2xl mt-[2vh] mb-[1.4vh]'>Customer-Centric Approach</h3>
              <p className='font-medium font-Hind text-sm md:text-base xl:text-xl'>Your satisfaction is our top priority; we go above and beyond to meet your expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}