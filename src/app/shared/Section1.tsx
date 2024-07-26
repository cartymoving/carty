import Image from 'next/image'

export default async function Section1(){
  return(
    <section className="h-screen w-screen relative">
      <Image
        className='absolute bottom-0 right-0 w-[53%] z-10' 
        src="/sec1_1.png"
        width={1158}
        height={759}
        alt="Picture of a worker"
      />  
      <div className="custom-shape absolute top-0 left-0 -z-10"></div>
      <div className='h-full w-full px-[10vw] relative flex flex-col gap-[8.8vh] pt-[17vh]'>
        <h1 className='text-mywhite font-Montserrat font-bold 2xl:text-[6rem] md:text-[5.5rem] text-[32px] leading-tight text-nowrap'>Carty Cares:<br /> Your Premier<br /> Moving Solution</h1>
        <p className='font-medium font-Hind text-2xl w-[43%]'>Your trusted partner for all your moving needs Easily estimate your move for free. Your trusted partner for all your moving needs Easily estimate your move for free. Your trusted partner for all your moving needs Easily estimate your move for free.</p>
      </div>
    </section>
  )
}