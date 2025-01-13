import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
// import 'aos/dist/aos.css';
import FAQ from './Pages/Faq';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/faq' element={<FAQ/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App