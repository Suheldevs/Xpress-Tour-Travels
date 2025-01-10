import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import FeatureSection from '../Components/FeatureSection'
import AboutComponent from '../Components/AboutSection'
import BookCar from '../Components/BookCar'
import ServicesSection from '../Components/ServicesSection'
import HowWeWork from '../Components/HowWeWork'
import { HowItWorks } from '../Components/HWW'

function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <FeatureSection/>
    <AboutComponent/>
    <BookCar/>
    <ServicesSection/>
    <HowWeWork/>
    {/* <HowItWorks/> */}
    </>
  )
}

export default Home