import Script from 'next/script'
import Section1 from './shared/Section1'
import Section2 from './shared/Section2'
import Section3 from './shared/Section3'
import Section4 from './shared/Section4'
import Section5 from './shared/Section5'

const page = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  )
}

export default page