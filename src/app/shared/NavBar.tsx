'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import QuoteBtn from './QuoteBtn'
import Overlay from './Overlay'

const NavBar = () => {
  const pathname = usePathname();
  const [isAnimating, setAnimating] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body?.classList.add("active");
    } else {
      body?.classList.remove("active");
    }
    return () => {
      body?.classList.remove("active");
    }
  }, [isOpen]);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };


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
    <nav className='top-8 fixed left-1/2 -translate-x-1/2 w-full h-fit px-[16px] md:px-[6vw] xl:px-[10vw] z-[60] max-w-[1920px]'>
      <div className='lg:hidden absolute left-1/2 top-2 -translate-x-1/2 bg-mywhite rounded-full w-2 h-2 close hiddenMenu'>
        <div className={`gap-4 text-[2rem] -mt-40 font-medium xL:hidden absolute left-1/2 w-screen h-screen px-4 -translate-x-1/2 top-[292px] flex-col lg:hidden text-nowrap font-Montserrat flex items-start justify-end menuel ${!isMenuVisible ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="/aboutUs" className={getLinkClass('/aboutUs')}>About Us</Link>
          <Link href="/#sec4" className={getLinkClass('/rates')}>Rates</Link>
          <Link href="/contacts" className={getLinkClass('/contacts')}>Contact Us</Link>
          <Link href="#" onClick={toggleOverlay} className='quote flex items-center w-full justify-center text-base lg:hidden gap-2 py-[18px] bg-mygreen mr-4 hover:bg-mywhite border-mygreen border-2 rounded-md font-Montserrat text-mywhite hover:text-mygreen font-bold transition-all'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6635 7.93127C21.1376 6.67626 20.3726 5.53554 19.4111 4.57268C18.4525 3.60816 17.3138 2.8413 16.0596 2.31565C14.7748 1.77454 13.3943 1.49718 12.0002 1.50002H11.9533C10.5354 1.50705 9.16427 1.7883 7.87286 2.34143C6.62944 2.87247 5.50139 3.64069 4.55177 4.60315C3.59958 5.56384 2.84335 6.70057 2.32521 7.95002C1.78736 9.24931 1.51482 10.6431 1.52364 12.0492C1.53068 13.6758 1.91974 15.2906 2.6463 16.7344V20.2969C2.6463 20.8922 3.12911 21.375 3.72208 21.375H7.27989C8.73038 22.107 10.331 22.4921 11.9557 22.5H12.0049C13.4065 22.5 14.7635 22.2281 16.0432 21.6961C17.291 21.1767 18.4255 20.4188 19.383 19.4649C20.3486 18.5063 21.108 17.386 21.6401 16.1367C22.1908 14.843 22.4721 13.4672 22.4791 12.0469C22.4838 10.6196 22.2072 9.2344 21.6635 7.93127ZM7.32208 13.125C6.70333 13.125 6.19943 12.6211 6.19943 12C6.19943 11.3789 6.70333 10.875 7.32208 10.875C7.94083 10.875 8.44474 11.3789 8.44474 12C8.44474 12.6211 7.94318 13.125 7.32208 13.125ZM12.0002 13.125C11.3815 13.125 10.8776 12.6211 10.8776 12C10.8776 11.3789 11.3815 10.875 12.0002 10.875C12.619 10.875 13.1229 11.3789 13.1229 12C13.1229 12.6211 12.619 13.125 12.0002 13.125ZM16.6783 13.125C16.0596 13.125 15.5557 12.6211 15.5557 12C15.5557 11.3789 16.0596 10.875 16.6783 10.875C17.2971 10.875 17.801 11.3789 17.801 12C17.801 12.6211 17.2971 13.125 16.6783 13.125Z"/>
            </svg>
            GET A QUOTE
          </Link>
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
          <Link href="/aboutUs" className={`${getLinkClass('/aboutUs')} forHover`}>About Us</Link>
          <Link href="/#sec4" className={`${getLinkClass('/rates')} forHover`}>Rates</Link>
          <Link href="/contacts" className={`${getLinkClass('/contacts')} forHover`}>Contact Us</Link>
        </div>
        <QuoteBtn />
        <div className='burger flex flex-col gap-1 cursor-pointer lg:hidden'>
          <div className='bg-myblack w-6 h-[3px] transition-all'></div>
          <div className='bg-myblack w-6 h-[3px] transition-all'></div>
          <div className='bg-myblack w-6 h-[3px] transition-all'></div>
        </div>
      </div>
      <Overlay isOpen={isOpen} onClose={toggleOverlay} />
    </nav>
  )
}

export default NavBar
