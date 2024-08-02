'use client'
import React from 'react'
import Slider from "react-slick"
import Stars from './Stars'

const Section5 = () => {
  const settings = {
    customPaging: function(i: number) {
      return (
        <div className="w-4 h-4 bg-white border-[1px] border-myblack rounded-full cursor-pointer"></div>
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
    { id: 1, review: "Carty moving mompany made our move so much easier. Their team was professional, punctual, and handled our belongings with care. We couldn't be happier with their service!", author: "THE JOHNSON FAMILY" },
    { id: 2, review: "I was nervous about moving my office, but carty movers took care of everything. They were efficient and ensured that all our equipment was safely transported and set up at the new location. Highly recommend!", author: "TECH INNOVATIONS INC." },
    { id: 3, review: "From start to finish, the team at carty movers was outstanding. They packed our items carefully and moved everything without a hitch. Thanks for a stress-free move!", author: "MICHAEL R." },
    { id: 4, review: "Our long-distance move was smooth and hassle-free thanks to carty moving company. The crew was friendly and professional, and they kept us informed every step of the way.", author: "EMILY W." },
    { id: 5, review: "We had a great experience with carty moving company. Their rates were reasonable, and the movers were courteous and careful. Highly recommend them for any move!", author: "THE DAVIS FAMILY" },
    { id: 6, review: "The team at carty movers was amazing! They showed up on time, worked hard, and ensured everything was in perfect condition. Best moving experience we've ever had.", author: "LISA M." },
    { id: 7, review: "Carty Moving Company made our local move a breeze. The movers were professional, friendly, and incredibly efficient. We couldn't have asked for better service!", author: "MARK T." },
    { id: 8, review: "We were impressed with the level of service provided by carty movers. They handled our delicate items with great care and ensured everything arrived safely. Thank you!", author: "THE BROWN FAMILY" },
    { id: 9, review: "Our office move was seamless thanks to carty moving company. They were organized, professional, and got us set up in our new space in no time. Fantastic service!", author: "THE BIG GUY COMPANY" },
    { id: 10, review: "Moving can be so stressful, but carty movers made it easy. They were professional, efficient, and took great care of our belongings. We highly recommend their services!", author: "ANNA R." },
    { id: 11, review: "Carty moving company exceeded our expectations. Their team was friendly, professional, and handled our move with ease. We are very grateful for their excellent service.", author: "THE THOMPSON FAMILY" },
    { id: 12, review: "Carty movers provided exceptional service during our move. They were quick, efficient, and treated our belongings as if they were their own. Will definitely use them again!", author: "JOHN K." }
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
                  <p className='mt-7 mb-3 font-medium font-Hind text-lg'>{`“${review.review}”`}</p>
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
