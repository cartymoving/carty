'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const Section2Images = () => {
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
    <motion.div
      className='flex flex-row flex-wrap w-full justify-center md:justify-between mt-4 md:mt-16 gap-4 md:gap-6 mb-16 md:mb-8'
      ref={ref}
      variants={list}
      animate={isInView ? 'show' : 'hide'}
      transition={{ duration: 0.3 }}
    >
      {[
        { src: '/sec2_1.png', alt: 'delivery guy', title: 'Local Moves', desc: 'Experience a hassle-free local move with Carty Moving Company.' },
        { src: '/sec2_2.png', alt: 'passing boxes in car', title: 'Long Distance Move', desc: 'Let Carty Movers take the stress out of your long-distance move.' },
        { src: '/sec2_3.png', alt: 'closing packages', title: 'Commercial Move', desc: 'Minimize downtime and keep your business operations running smoothly.' },
      ].map(({ src, alt, title, desc }, index) => (
        <motion.div
          className="card flex flex-col w-full bg-white md:w-[calc(33.3%-1rem)] container px-4 pt-4 rounded-lg h-auto relative"
          key={index}
          variants={item}
          transition={{ duration: 0.3 }}
        >
          <div className="image-container relative rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={alt}
              width="464"
              height="360"
              unoptimized={true}
              className="image w-full h-auto object-cover rounded-lg transition-all duration-300"
            />
          </div>
          <div className="content mt-3 xl:mt-4 transition-all duration-300">
            <h3 className="font-Montserrat font-bold text-base md:text-xl xl:text-2xl">{title}</h3>
            <p className="font-Hind font-medium text-sm md:text-base xl:text-xl mt-3 xl:mt-4 md:mb-5">{desc}</p>
          </div>
          <p className="learn-more text-myblack text-sm md:text-base xl:text-xl font-bold font-Hind cursor-pointer flex items-center gap-2 hover:text-mygreen md:absolute bottom-0 left-0 right-0 py-3 md:px-4 opacity-100 md:opacity-0 transition-all duration-300">
            Learn more 
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 h-2 md:w-[9px] md:h-[11px]"
            >
              <path d="M9 5.5L0.750001 10.2631L0.750001 0.73686L9 5.5Z" fill="#0A2513"/>
            </svg>
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Section2Images;
