'use client'
import React, {useEffect, useState} from 'react'
import Stars from './Stars'

const Section5 = () => {
  let [ismousedown, setMousedown] = useState(false);
  let [initialCoord, setCoord] = useState(0);
  useEffect(() => {
    const circles = document.querySelectorAll<HTMLElement>(".size-4");
    const elements = document.querySelectorAll<HTMLElement>(".el");
    const parent = document.querySelector<HTMLElement>(".parent");

    // function HandleMouseDown(e){
    //   setMousedown(true);
    //   setCoord(e.clientX);
    //   console.log("down")
    // }

    // function HandleMouseUp(){
    //   setMousedown(false);
    //   setCoord(0);
    // }

    // parent?.addEventListener("mousemove", HandleMouseMove);
    // parent?.addEventListener("mousedown", HandleMouseDown);
    // parent?.addEventListener("mouseup", HandleMouseUp);

    const handleClick = (index: number) => () => {
      circles.forEach((circle, i) => {
        circle.style.backgroundColor = i === index ? "#4C9A2A" : "#F6F9FC";
      });
      
      const transformValues = ["translateX(100%)", "translateX(0)", "translateX(-100%)"];
      elements.forEach(e => {
        e.style.transform = transformValues[index];
      });
    };

    const handlers = [handleClick(0), handleClick(1), handleClick(2)];

    circles.forEach((circle, i) => {
      circle.addEventListener("click", handlers[i]);
    });

    return () => {
      circles.forEach((circle, i) => {
        circle.removeEventListener("click", handlers[i]);
      });
    };
  }, []);

  return(
  <section className='px-4 md:px-[10vw] w-screen h-fit mt-[11vh]'>
    <div>
      <p className='text-mygreen text-2xl font-Montserrat font-bold'>All Review</p>
      <h1 className='text-[4rem] text-myblack font-Montserrat font-bold'>Client Review</h1>
    </div>
    <div className='bg-white rounded-xl container pt-[2.9vh] pb-[calc(4vh+40px)] px-[1.6vw] h-[680px] relative overflow-hidden parent'>
      <div className='w-full h-full text-mywhite flex gap-8 flex-wrap absolute pb-[calc(4vh+60px)] px-[1.6vw] left-full el'>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“1Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
      </div>

      <div className='w-full h-full text-mywhite flex gap-8 flex-wrap absolute pb-[calc(4vh+60px)] px-[1.6vw] left-0 el'>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“2Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
      </div>

      <div className='w-full h-full text-mywhite flex gap-8 flex-wrap absolute pb-[calc(4vh+60px)] px-[1.6vw] right-full el'>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“3Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
        <div className='bg-mydarkgreen flex flex-col w-[calc(50%-1rem)] rounded-xl py-[4.4vh] px-[1.6vw]'>
          <Stars />
          <p className='mt-[2.9vh] mb-3 font-medium font-Hind text-lg'>“Cross Country Moving made our coast-to-coast relocation a breeze! The team was professional, courteous, and handled all our belongings with care. We couldn’t be happier with the service.”</p>
          <p className='font-Montserrat font-bold text-base'>John and Sarah L. - New York to California</p>
        </div>
      </div>

      
      <div className='flex gap-2 absolute bottom-[calc(1.45vh+16px)] left-1/2 -translate-x-1/2'>
        <div className='size-4 bg-mywhite border-[1px] border-myblack rounded-full cursor-pointer'></div>
        <div className='size-4 bg-mygreen border-[1px] border-myblack rounded-full cursor-pointer'></div>
        <div className='size-4 bg-mywhite border-[1px] border-myblack rounded-full cursor-pointer'></div>
      </div>
    </div>
  </section>
  )
}

export default Section5