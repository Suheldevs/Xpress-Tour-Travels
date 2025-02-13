import React, { useEffect, lazy, Suspense } from "react";
import HeroSection from "../Components/HeroSection";
import FeatureSection from "../Components/FeatureSection";

// Lazy Load Other Sections
const AboutComponent = lazy(() => import("../Components/AboutSection"));
const BookCar = lazy(() => import("../Components/BookCar"));
const ServicesSection = lazy(() => import("../Components/ServicesSection"));
const StatsComponent = lazy(() => import("../Components/Statics"));
const WhyChooseUs = lazy(() => import("../Components/WhyChooseUs"));
const HowWeWork = lazy(() => import("../Components/HowWeWork"));
const Review = lazy(() => import("../Components/Review"));

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <FeatureSection />

      <Suspense
        fallback={
          <div className="flex justify-center items-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-900"></div>
          </div>
        }
      >
        <AboutComponent />
        <BookCar />
        <ServicesSection />
        <StatsComponent />
        <WhyChooseUs />
        <HowWeWork />
        <Review />
      </Suspense>
    </>
  );
}

export default Home;
