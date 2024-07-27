import Image from 'next/image'

export default async function Section1(){
  return(
    <section className="min-h-screen h-fit w-screen relative">
      <Image
        className='absolute hidden bottom-0 right-0 h-[55%] xl:h-[60%] 2xl:h-[70%] w-fit z-10' 
        src="/sec1_1.png"
        width={1158}
        height={759}
        alt="Picture of a worker"
      />  
      <div className="custom-shape absolute top-0 left-0 -z-10"></div>
      <div className='min-h-screen h-fit md:w-full px-4 md:px-[10vw] relative flex flex-col gap-[8.8vh] pt-[20vh]'>
        <h1 className='text-mywhite h1 w-fit font-Montserrat font-bold leading-tight text-nowrap'>Carty Cares:<br /> Your Premier<br /> Moving Solution</h1>
        <p className='font-medium font-Hind text-sm msm:text-lg lg:text-xl xl:text-2xl pr-4 md:pr-0 bottom-0 absolute md:block md:w-[43%] mt-0 lg:mt-3 xl:mt-0 2xl:leading-relaxed'>Your trusted partner for all your moving needs Easily estimate your move for free. Your trusted partner for all your moving needs Easily estimate your move for free. Your trusted partner for all your moving needs Easily estimate your move for free.</p>
      </div>
    </section>
  )
}