'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import QuoteBtn from './QuoteBtn'

const NavBar = () => {
  const pathname = usePathname();
  const [isAnimating, setAnimating] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const burger = document.querySelector(".burger");
    const hiddenMenu = document.querySelector(".hiddenMenu");
    const nav = document.querySelector(".nav");
    const body = document.querySelector("body");
    const menuel = document.querySelector(".menuel");
    const links = document.querySelectorAll(".menuel a");

    const handleClick = () => {
      if (isAnimating) return;

      setAnimating(true);
      burger?.classList.add("disabled");

      if (hiddenMenu?.classList.contains("active")) {
        menuel?.classList.remove("active");
        menuel?.classList.add("close");
        burger?.classList.remove("active");
        setTimeout(() => {
          hiddenMenu?.classList.remove("active");
          hiddenMenu?.classList.add("close");
          nav?.classList.remove("active");
          body?.classList.remove("active");
          setAnimating(false);
          burger?.classList.remove("disabled");
          setMenuVisible(false);
        }, 1000);
      } else {
        hiddenMenu?.classList.remove("close");
        menuel?.classList.remove("close");
        hiddenMenu?.classList.add("active");
        burger?.classList.add("active");
        nav?.classList.add("active");
        body?.classList.add("active");
        setMenuVisible(true);
        setTimeout(() => {
          menuel?.classList.add("active");
          setAnimating(false);
          burger?.classList.remove("disabled");
        }, 700);
      }
    };

    const handleLinkClick = () => {
      if (hiddenMenu?.classList.contains("active")) {
        menuel?.classList.remove("active");
        menuel?.classList.add("close");
        burger?.classList.remove("active");
        setTimeout(() => {
          hiddenMenu?.classList.remove("active");
          hiddenMenu?.classList.add("close");
          nav?.classList.remove("active");
          body?.classList.remove("active");
          setAnimating(false);
          burger?.classList.remove("disabled");
          setMenuVisible(false);
        }, 1000);
      }
    };

    burger?.addEventListener("click", handleClick);
    links.forEach(link => link.addEventListener("click", handleLinkClick));

    return () => {
      burger?.removeEventListener("click", handleClick);
      links.forEach(link => link.removeEventListener("click", handleLinkClick));
    };
  }, [isAnimating]);

  const getLinkClass = (path: string) => pathname === path ? 'text-mygreen font-bold transition-all' : 'transition-all font-medium';

  return (
    <nav className='top-8 absolute w-full h-fit px-[16px] md:px-[6vw] xl:px-[10vw] z-[60] max-w-[1920px] left-1/2 -translate-x-1/2'>
      <div className='lg:hidden absolute left-1/2 top-2 -translate-x-1/2 bg-mywhite rounded-full w-2 h-2 close hiddenMenu'>
        <div className={`gap-4 text-[2rem] -mt-40 font-medium xL:hidden absolute left-1/2 w-screen h-screen px-4 -translate-x-1/2 top-[292px] flex-col lg:hidden text-nowrap font-Montserrat flex items-start justify-end menuel ${!isMenuVisible ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="#" className={getLinkClass('/aboutUs')}>About Us</Link>
          <Link href="#" className={getLinkClass('/rates')}>Rates</Link>
          <Link href="/contacts" className={getLinkClass('/contacts')}>Contact Us</Link>
          <QuoteBtn />
          <p className='text-center font-medium font-Montserrat text-xs text-myblack absolute w-full left-1/2 -translate-x-1/2 -bottom-7'>
            © 2024 Carty Moving & Storage.
            All rights reserved 
          </p>
        </div>
      </div>
      <div className='bg-mywhite rounded-lg md:px-8 px-4 py-2 md:py-4 relative z-20 flex items-center text-nowrap justify-between w-full h-[42.2px] md:h-[85.44px] xl:h-[90px] 2xl:h-24 nav'>
        <div className='lg:hidden block'></div>
        <Image
          src="/logo.png"
          width={182}
          height={64}
          alt="logo"
          className='2xl:w-[182px] 2xl:h-[64px] md:w-[152px] w-[91px]'
        />
        <div className='gap-6 xl:gap-12 font-medium forHoverParent text-base 2xl:text-xl lg:flex hidden font-Montserrat'>
          <Link href="/" className={`${getLinkClass('/')} forHover`}>Home</Link>
          <Link href="#" className={`${getLinkClass('/aboutUs')} forHover`}>About Us</Link>
          <Link href="#" className={`${getLinkClass('/rates')} forHover`}>Rates</Link>
          <Link href="/contacts" className={`${getLinkClass('/contacts')} forHover`}>Contact Us</Link>
        </div>
        <QuoteBtn />
        <div className='burger flex flex-col gap-1 cursor-pointer lg:hidden'>
          <div className='bg-myblack w-6 h-[3px] transition-all'></div>
          <div className='bg-myblack w-6 h-[3px] transition-all'></div>
          <div className='bg-myblack w-6 h-[3px] transition-all'></div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
