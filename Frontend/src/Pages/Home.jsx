import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import FeatureSection from '../Components/FeatureSection'
import AboutComponent from '../Components/AboutSection'
import BookCar from '../Components/BookCar'
import ServicesSection from '../Components/ServicesSection'
import HowWeWork from '../Components/HowWeWork'
import { HowItWorks } from '../Components/HWW'
import WhyChooseUs from '../Components/WhyChooseUs'
import Footer from '../Components/Footer'
import Review from '../Components/Review'

function Home() {
  return (
    <>
    <HeroSection/>
    <FeatureSection/>
    <AboutComponent/>
    <BookCar/>
    <ServicesSection/>
    <HowWeWork/>
    <WhyChooseUs/>
    <Review/>
    {/* <HowItWorks/> */}
    </>
  )
}

export default Home