import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import 'aos/dist/aos.css';
import FAQ from './Pages/Faq';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Services from './Pages/OurServices';
import Testimonials from './Pages/Testimonials';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import SocialSidebar from './Components/Sidebaar';

const App = () => {
  return (
    <div>
      <Header />
      <SocialSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
