'use client'
import React, { useRef } from 'react';
import Link from 'next/link'
import { motion, useInView } from 'framer-motion';

const Section4Containers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const list = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  const item = {
    show: {
      opacity: 1,
      y: 0,
    },
    hide: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <>
    <motion.div className='flex flex-col items-center gap-12 mt-16' ref={ref} variants={list} animate={isInView ? 'show' : 'hide'} transition={{ duration: 0.3 }}>
        <motion.div className='container bg-white pb-7 pt-14 px-4 xl:px-12 w-full md:w-[48%] rounded-xl relative border-[1px] border-mygreen flex flex-col' variants={item} transition={{ duration: 0.3 }}>
          <div className='w-full h-fit bg-mygreen text-mywhite text-center font-Montserrat font-bold text-sm py-[6px] absolute top-[-2px] left-0 rounded-tr-xl flex justify-center gap-1 rounded-tl-xl'>Most popular
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.29869 16.9473C7.14067 16.9483 6.98611 16.9011 6.85566 16.8119C6.7252 16.7228 6.62506 16.5959 6.56863 16.4483L5.3192 13.2125C5.29389 13.1473 5.25524 13.0881 5.20572 13.0387C5.15619 12.9893 5.09689 12.9508 5.03162 12.9257L1.79148 11.6842C1.64388 11.6278 1.51686 11.5279 1.42719 11.3979C1.33751 11.2678 1.28938 11.1135 1.28917 10.9555C1.28895 10.7975 1.33665 10.6432 1.42597 10.5128C1.5153 10.3825 1.64204 10.2823 1.78948 10.2255L5.02528 8.97603C5.09048 8.95073 5.14967 8.91207 5.19906 8.86255C5.24845 8.81302 5.28694 8.75372 5.31207 8.68845L6.55357 5.44831C6.60999 5.30072 6.70983 5.1737 6.83993 5.08402C6.97002 4.99434 7.12425 4.94621 7.28226 4.946C7.44027 4.94578 7.59463 4.99348 7.72497 5.08281C7.85531 5.17213 7.9555 5.29887 8.01232 5.44631L9.26175 8.68211C9.28706 8.74731 9.32571 8.80651 9.37523 8.85589C9.42476 8.90528 9.48406 8.94378 9.54933 8.9689L12.7698 10.2029C12.9234 10.2596 13.0558 10.3623 13.1489 10.4969C13.2421 10.6315 13.2915 10.7916 13.2905 10.9553C13.2883 11.1106 13.2396 11.2616 13.1506 11.3889C13.0617 11.5162 12.9365 11.6138 12.7915 11.6692L9.55568 12.9186C9.49047 12.9439 9.43128 12.9825 9.38189 13.0321C9.3325 13.0816 9.29401 13.1409 9.26888 13.2062L8.02738 16.4463C7.97135 16.5941 7.87156 16.7212 7.74135 16.8107C7.61114 16.9002 7.4567 16.9479 7.29869 16.9473Z" fill="white"/>
              <path d="M3.53432 6.45244C3.44168 6.45257 3.35118 6.42462 3.27474 6.37229C3.1983 6.31995 3.1395 6.24569 3.10611 6.15928L2.57736 4.79C2.5659 4.76006 2.54824 4.73287 2.52553 4.71023C2.50283 4.68758 2.47559 4.67 2.44561 4.65862L1.0749 4.13362C0.988405 4.10045 0.913993 4.04186 0.861462 3.96556C0.808931 3.88926 0.780746 3.79884 0.780619 3.70621C0.780492 3.61358 0.80843 3.52308 0.860752 3.44664C0.913074 3.3702 0.987326 3.3114 1.07372 3.278L2.443 2.74925C2.47292 2.73773 2.50008 2.72005 2.52271 2.69736C2.54535 2.67466 2.56295 2.64745 2.57438 2.6175L3.09471 1.25898C3.12405 1.179 3.17463 1.10853 3.24102 1.05514C3.3074 1.00175 3.38708 0.967466 3.47149 0.955962C3.57283 0.943502 3.67543 0.96523 3.76302 1.0177C3.85061 1.07017 3.91818 1.15038 3.95501 1.24561L4.48376 2.61489C4.49527 2.64481 4.51295 2.67197 4.53565 2.6946C4.55834 2.71724 4.58555 2.73484 4.6155 2.74627L5.98622 3.27127C6.07271 3.30444 6.14712 3.36304 6.19965 3.43933C6.25218 3.51563 6.28037 3.60605 6.2805 3.69868C6.28062 3.79132 6.25268 3.88181 6.20036 3.95825C6.14804 4.03469 6.07379 4.09349 5.98739 4.1269L4.61811 4.65565C4.58817 4.66711 4.56098 4.68477 4.53834 4.70747C4.5157 4.73018 4.49811 4.75741 4.48673 4.78739L3.96173 6.15811C3.92857 6.24461 3.86998 6.31903 3.79368 6.37158C3.71739 6.42412 3.62696 6.45231 3.53432 6.45244Z" fill="white"/>
              <path d="M13.2877 8.9391C13.1867 8.93921 13.088 8.90869 13.0046 8.85156C12.9212 8.79444 12.8571 8.7134 12.8207 8.61911L12.1044 6.76478C12.0918 6.7321 12.0725 6.70244 12.0477 6.67771C12.0229 6.65298 11.9932 6.63374 11.9605 6.62123L10.1042 5.91001C10.0099 5.87382 9.92877 5.80992 9.87149 5.72671C9.81422 5.64351 9.78349 5.5449 9.78335 5.44389C9.78321 5.34288 9.81367 5.24419 9.87072 5.16083C9.92777 5.07747 10.0087 5.01334 10.1029 4.97689L11.9573 4.2606C11.9899 4.248 12.0196 4.22868 12.0443 4.20388C12.0691 4.17908 12.0883 4.14937 12.1008 4.11666L12.8067 2.2735C12.839 2.18634 12.8942 2.10955 12.9666 2.05128C13.039 1.99302 13.1258 1.95547 13.2178 1.94262C13.3284 1.92908 13.4404 1.95287 13.5359 2.0102C13.6314 2.06753 13.7051 2.15513 13.7452 2.25909L14.4614 4.11342C14.474 4.1461 14.4934 4.17576 14.5182 4.20049C14.543 4.22522 14.5727 4.24447 14.6054 4.25698L16.4617 4.96819C16.556 5.00438 16.6371 5.06829 16.6944 5.15149C16.7517 5.2347 16.7824 5.3333 16.7825 5.43431C16.7827 5.53533 16.7522 5.63401 16.6952 5.71737C16.6381 5.80074 16.5572 5.86486 16.463 5.90131L14.6086 6.6176C14.5759 6.6302 14.5463 6.64953 14.5216 6.67432C14.4968 6.69912 14.4776 6.72884 14.4651 6.76155L13.7539 8.61784C13.7177 8.71222 13.6539 8.79344 13.5706 8.85079C13.4874 8.90814 13.3888 8.93893 13.2877 8.9391Z" fill="white"/>
            </svg>
          </div>
          <div className='w-full h-auto flex flex-col sm:flex-row sm:justify-between'>
            <div>
              <h3 className='font-Montserrat text-mydarkgreen font-bold text-xl'>3 Movers & Truck</h3>
              <p className='font-medium font-Hind text-sm text-myblack'>(2/3 bedroom)</p>
            </div>
            <div className=' 2xl:pr-[10vw] mt-4 sm:mt-0'>
              <p className='text-nowrap'><span className='font-Montserrat font-bold text-xl xl:text-2xl'>180 </span>/p/h Credit rate</p>
              <p className='text-nowrap'><span className='font-Montserrat font-bold text-xl xl:text-2xl'>160 </span>/p/h Cash rate</p>
            </div>
          </div>
          <div className='w-full h-auto'>
            <p className='font-Barlow font-bold text-mydarkgreen mt-6 sm:mt-0 mb-3'>Full-Service Includes:</p>
            <div className='w-full h-fit flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between text-myblack text-xs md:text-sm xl:text-base font-Hind font-medium'>
              <div className='flex flex-col gap-3'>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Loading / Unloading
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Packing / Unpacking
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Blankets & Moving Pads
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Wardrobe & TV Boxes
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Plastic Wrap & Tape
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Regular Assembly Services
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Dollies, Tools, Straps
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Floors & Doors Protection
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Tax & Basic Coverage
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  No Hidden Charges
                </p>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex justify-center mt-12'>
            <Link className='text-mywhite text-xs md:text-base font-bold font-Montserrat w-full lg:w-fit text-center bg-mygreen rounded-[4px] border-2 border-mygreen py-[10px] lg:px-[124px] md:hover:bg-white md:hover:text-mygreen transition-all' href="#">Get a Quote</Link>
          </div>
        </motion.div>
        <div className='flex md:flex-row flex-col w-full items-center md:items-start justify-center gap-12'>
          <motion.div className='container bg-white py-7 px-4 xl:px-12 md:w-[48%] rounded-xl' variants={item} transition={{ duration: 0.3 }}>
          <div className='w-full h-auto flex sm:flex-row flex-col justify-between'>
            <div>
              <h3 className='font-Montserrat text-mydarkgreen font-bold text-xl'>2 Movers & Truck</h3>
              <p className='font-medium font-Hind text-sm text-myblack'>(studio, 1 bedroom)</p>
            </div>
            <div className=' 2xl:pr-[10vw] mt-4 sm:mt-0'>
              <p className='text-nowrap'><span className='font-Montserrat font-bold text-xl xl:text-2xl'>140 </span>/p/h Credit rate</p>
              <p className='text-nowrap'><span className='font-Montserrat font-bold text-xl xl:text-2xl'>120 </span>/p/h Cash rate</p>
            </div>
          </div>
          <div className='w-full h-auto mt-6'>
            <p className='font-Hind font-bold sm:font-medium text-mydarkgreen mb-3'>Full-Service Includes:</p>
            <div className='w-full h-fit flex sm:flex-row flex-col justify-between text-myblack text-xs md:text-sm xl:text-base font-Hind font-medium'>
              <div className='flex flex-col gap-3'>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Packing / Unpacking
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Blankets & Moving Pads
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Wardrobe & TV Boxes
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Plastic Wrap & Tape             
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Regular Assembly Services
                </p>
              </div>
              <div className='flex flex-col gap-3 sm:mt-0 mt-3'>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Dollies, Tools, Straps
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Floors & Doors Protection
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Tax & Basic Coverage
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  No Extra Charges
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  No Hidden fees
                </p>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex justify-center mt-12'>
            <Link className='text-mywhite text-xs md:text-base font-bold font-Montserrat w-full lg:w-fit text-center bg-mydarkgreen rounded-[4px] border-2 border-mydarkgreen py-[10px] lg:px-[124px] md:hover:bg-white md:hover:text-mydarkgreen transition-all' href="#">Get a Quote</Link>
          </div>
          </motion.div>
          <motion.div className='container bg-white py-7 px-4 xl:px-12 md:w-[48%] rounded-xl' variants={item} transition={{ duration: 0.3 }}>
          <div className='w-full h-auto flex justify-between sm:flex-row flex-col'>
            <div>
              <h3 className='font-Montserrat text-mydarkgreen font-bold text-xl'>4 Movers & Truck</h3>
              <p className='font-medium font-Hind text-sm text-myblack'>(house, office move)</p>
            </div>
            <div className=' 2xl:pr-[10vw] mt-4 sm:mt-0'>
              <p className='text-nowrap'><span className='font-Montserrat font-bold text-xl xl:text-2xl'>220 </span>/p/h Credit rate</p>
              <p className='text-nowrap'><span className='font-Montserrat font-bold text-xl xl:text-2xl'>200 </span>/p/h Cash rate</p>
            </div>
          </div>
          <div className='w-full h-auto mt-6'>
            <p className='font-Hind font-bold sm:font-medium text-mydarkgreen mb-3'>Full-Service Includes:</p>
            <div className='w-full h-fit flex sm:flex-row flex-col justify-between text-myblack text-xs md:text-sm xl:text-base font-Hind font-medium'>
              <div className='flex flex-col gap-3'>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Loading / Unloading
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Packing / Unpacking
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Blankets & Moving Pads
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Wardrobe & TV Boxes
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Plastic Wrap & Tape
                </p>
              </div>
              <div className='flex flex-col gap-3 sm:mt-0 mt-3'>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Regular Assembly Services
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Dollies, Tools, Straps
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Floors & Doors Protection
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  Tax & Basic Coverage
                </p>
                <p className='flex gap-[0.9vw] items-center'>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9635 2.26967L6.07433 15.8945L0.0587267 9.8956L1.51544 8.43484L5.97036 12.8774L16.4097 0.91401L17.9635 2.26967Z" fill="#1E5631"/>
                  </svg>
                  No Hidden Charges
                </p>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex justify-center mt-12'>
            <Link className='text-mywhite text-xs md:text-base font-bold font-Montserrat w-full lg:w-fit text-center bg-mydarkgreen rounded-[4px] border-2 border-mydarkgreen py-[10px] lg:px-[124px] md:hover:bg-white md:hover:text-mydarkgreen transition-all' href="#">Get a Quote</Link>
          </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Section4Containers