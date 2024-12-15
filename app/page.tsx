import React from 'react'
import HeroArea from '../components/HeroArea'
import HeaderSection from '../components/HeaderSection'
import SliderSection from '../components/SliderSection'
import ServiceSection from '../components/ServiceSection'
import AboutSection from '../components/AboutSection'
import WhySection from '../components/WhySection'
import TeamSection from '../components/TeamSection'
import ClientSection from '../components/ClientSection'
import InfoSection from '../components/InfoSection'
import FooterSection from '../components/FooterSection'

const Page: React.FC = () => {
  return (
    <>
      {/* <div className="hero_area">
      <HeroArea /> */}
      {/* <HeaderSection /> */}
      <HeroArea />
      <SliderSection />
      <ServiceSection />
      <AboutSection />
      <WhySection />
      <TeamSection />
      <ClientSection />
      <InfoSection />
      {/* <FooterSection /> */}
      {/* </div> */}
    </>
  )
}

export default Page
