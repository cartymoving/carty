'use client'
import React from 'react'
import Slider from "react-slick"
import Stars from './Stars'

const Section5 = () => {
  const settings = {
    customPaging: function(i: number) {
      return (
        <div className="w-4 h-4 bg-mywhite border-[1px] border-myblack rounded-full cursor-pointer"></div>
      );
    },
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const reviews = [
    { id: 1, review: "1Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 2, review: "2Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 3, review: "3Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 4, review: "4Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 5, review: "5Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 6, review: "6Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 7, review: "Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 8, review: "Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 9, review: "Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 10, review: "Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 11, review: "Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" },
    { id: 12, review: "Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.", author: "John and Sarah L. - New York to California" }
  ];

  return (
    <section className='px-4 md:px-[10vw] w-screen h-fit mt-[11vh] max-w-[1920px] mx-auto'>
      <div className='mb-11 md:mb-[5.9vh]'>
        <p className='text-mygreen text-sm md:text-xl xl:text-2xl font-Montserrat font-bold'>All Review</p>
        <h1 className='text-[2rem] lg:text-5xl 2xl:text-[4rem] text-myblack font-Montserrat font-bold'>Client Review</h1>
      </div>
      <div className='bg-white rounded-xl container pt-7 pb-[calc(2.3vh+25px)] px-[1.6vw] h-fit relative overflow-hidden mx-auto'>
        <Slider {...settings} className='h-full'>
          {[0, 1, 2].map((pageIndex) => (
            <div key={pageIndex} className='w-full h-full text-mywhite flex flex-wrap justify-between gap-4 md:gap-8 pb-[calc(1.4vh+16px)] outline-none realflex px-[1.6vw]'>
              {reviews.slice(pageIndex * 4, pageIndex * 4 + 4).map((review, index) => (
                <div key={index} className='bg-mydarkgreen !flex flex-col rounded-xl py-8 md:py-11 del px-4 md:px-[1.6vw] w-full md:w-[calc(50%-1rem)]'>
                  <Stars />
                  <p className='mt-7 mb-3 font-medium font-Hind text-lg'>{`"${review.review}"`}</p>
                  <p className='font-Montserrat font-bold text-base'>{review.author}</p>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Section5
