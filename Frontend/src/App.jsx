import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import 'aos/dist/aos.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SocialSidebar from './Components/Sidebaar';

const FAQ = lazy(() => import('./Pages/Faq'));
const Services = lazy(() => import('./Pages/OurServices'));
const Testimonials = lazy(() => import('./Pages/Testimonials'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));

const App = () => {
  return (
    <div>
      <Header />
      <SocialSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/faq"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FAQ />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/testimonial"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Testimonials />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
